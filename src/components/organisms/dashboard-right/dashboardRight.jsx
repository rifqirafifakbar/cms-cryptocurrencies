export const DashboardRight = props => {

    return(
        <section className="home-section">
            <div className="home-content">
                <button className={props.isClose ? `button-burger` : `button-burger slide`} onClick={()=> props.setIsClose(!props.isClose)}>
                    <box-icon size="sm" name='menu' color={props.isClose ? '#3e76ff':"white"}></box-icon>
                </button>
                
                <div className="breadcumb">
                    <div className="breadcumb-left">
                        <box-icon size="sm" name='home-alt-2' color="6d6e71" ></box-icon>
                        <div className="breadcumb-menu">

                        </div>
                        <span>/</span>
                        <span>Dashboard</span>
                        <span>/</span>
                    </div>
                    <div className="breadcumb-right">
                        <div className="profile">
                            <img src={require('../../../img/icons/user.png')} alt={'user'} className='profile_user'/>
                            <span className="font-16_normal">James</span>
                            <box-icon name='chevron-down' ></box-icon>
                            <box-icon name='bell' type='solid' ></box-icon>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}