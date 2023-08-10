import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../services';
import { InputText } from 'primereact/inputtext';

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
        return <img src={product.image} alt={product.image} className="crypto_image" />;
    };

    const onGlobalFilterChange = (e) => {

        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        console.log(_filters)
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

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
        // console.log()
        fetchData().then((data)=> setProducts(data))
    },[])

    const header = renderHeader();

    return (
        <div className='table-section'>
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