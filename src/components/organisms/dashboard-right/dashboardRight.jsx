import { CryptoCard } from '../../cards/crypto-card/cryptoCard'
import { DataTableApp } from '../../molecules/datatable/datatable'

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
            <div className='profile-section'>
                <img src={require('../../../img/icons/user.png')} alt={'user'} className='profile_user'/>
                <div className='profile-description'>
                    <span className='font-16_bold'>James Warden</span>
                    <span className='font-12font-16_bold'>Admin - Company A</span>
                </div>
            </div>


            <div className='crypto-section'>
                <CryptoCard name="Crypto Paid" color="blue" value="20"/>
                <CryptoCard name="Crypto in progress" color="blue" value="20"/>
                <CryptoCard name="Crypto unpaid" color="blue" value="20"/>
            </div>

            <DataTableApp />

        </section>
    )
}