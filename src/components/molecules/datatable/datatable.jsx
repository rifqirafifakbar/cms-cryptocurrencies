import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../services';
import { InputText } from 'primereact/inputtext';
import Image from 'next/image'
import { useStore } from '../../../zustand/store';

export const DataTableApp = (props) => {
    const [products, setProducts] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: 'contains' },
    });

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const imageBodyTemplate = (product) => {
        return <Image src={product.image} alt={product.image} className="crypto_image" width="50" height="50" />;
    };

    const onGlobalFilterChange = (e) => {

        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const { isColor } = useStore();
    const renderHeader = () => {
        return (
            <div className="header">
                <span className="text-xl text-900 font-bold">Cryptocurrencies</span>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    useEffect(() => {
        fetchData().then((data)=> setProducts(data))
    },[])

    const header = renderHeader();

    return (
        <div className={`table-section ${isColor}`}>
            <DataTable 
                value={products} 
                filters={filters} 
                paginator rows={5} 
                rowsPerPageOptions={[5, 10, 25, 50]} 
                globalFilterFields={['name', 'market_cap', 'current_price']} 
                header={header} 
                emptyMessage="No data found." 
                paginatorTemplate=" RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                >
                    <Column field="image" header="LOGO" body={imageBodyTemplate}></Column>
                    <Column field="name" header="NAME"></Column>
                    <Column field="current_price" header="CURRENT PRICE" ></Column>
                    <Column field="market_cap" header="MARKET CAP"></Column>
            </DataTable>
        </div>
    )
}