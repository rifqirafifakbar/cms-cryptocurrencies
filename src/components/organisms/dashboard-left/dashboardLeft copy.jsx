import logo_full from '../../../img/logo.png'

export const DashboardLeft = () => {
    return (
        <>
        <div className="dashboard--left">
            <div className="dashboard-logo">
                <img src={logo_full} alt={'icon logo'}/>
            </div>

            <div className='pagesWrapper'>
                <a href="#">
                    <div className='pages-logo'></div>
                    <div className='pages-name'> Dashboards</div>
                </a>
            </div>

            <span>PAGES</span>

            <div className='pagesWrapper'>
                <a href="#">
                    <div className='pages-logo'></div>
                    <div className='pages-name'> Settings</div>
                </a>
            </div>
            
        </div> 
        </>
    )
}