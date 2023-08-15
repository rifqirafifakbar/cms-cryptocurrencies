/* eslint-disable react-hooks/rules-of-hooks */
import { CryptoCard } from '../../molecules/cards/crypto-card/cryptoCard'
import { DataTableApp } from '../../molecules/datatable/datatable'
import image_user from '../../../../public/images/icons/user.png'
import Image from 'next/image'
import { ProfileCard } from '../../molecules/cards/profile-card/profileCard'
import { useState } from 'react'
import { useStore } from '../../../zustand/store';
import { useRouter } from 'next/navigation'

export const DashboardRight = props => {

    const [isSubMenu, setIsSubMenu] = useState(false);
    const { isColor } = useStore();
    const router = useRouter();

    const handlerLogout = () => {
        router.push('/')
    }
    
    return(
        <section className="home-section">
            <div className="home-content">
                <button className={props.isClose ? `button-burger` : `button-burger slide ${isColor}`} onClick={()=> props.setIsClose(!props.isClose)}>
                    <box-icon size="sm" name='menu' color={props.isClose ? isColor === 'blue' ? '#3e76ff' : '#57a452':"white"}></box-icon>
                    
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
                            <Image src={image_user} alt={'user'} className='profile_user'/>

                            <div className='wrapper'>
                                <span className="font-16_normal">James</span>
                                <div className='chevron'>
                                    <box-icon name='chevron-down' className="chevron" onClick={(e) => setIsSubMenu(!isSubMenu)}></box-icon>
                                </div>

                                <div className={`sub-profile ${isSubMenu ? 'open' : ''}`}>
                                    <div className='profileWrapper'>
                                        <span className='font-24_bold'>Profile</span>
                                        <div className='close' onClick={(e) => setIsSubMenu(!isSubMenu)}>
                                            <box-icon name='x' ></box-icon>
                                        </div>
                                    </div>

                                    <ProfileCard isSubProfile={true} />

                                    <span className='font-16'>Select Theme Color</span>

                                    <div className='colorWrapper'>
                                        <div className='card' onClick={(e) => useStore.setState({ isColor: 'blue' })}>
                                            <div className='blueIcon'></div>
                                            <span>Blue</span>
                                        </div>

                                        
                                        <div className='card'  onClick={(e) => useStore.setState({ isColor: 'green' })}>
                                            <div className='greenIcon'></div>
                                            <span>Green</span>
                                        </div>
                                    </div>

                                    <div className='logoutWrapper'>
                                        <box-icon name='log-in' color="red"></box-icon>
                                        <span onClick={() => handlerLogout()}>Log Out</span>
                                    </div>
                                </div>
                            </div>
                            <box-icon name='bell' type='solid' ></box-icon>
                        </div>
                    </div>
                    
                </div>
            </div>

            <ProfileCard />


            <div className='crypto-section'>
                <CryptoCard name="Crypto Paid" color={isColor} value="20" isColorEditable={true}/>
                <CryptoCard name="Crypto in progress" color="grey" value="20"/>
                <CryptoCard name="Crypto unpaid" color="grey" value="20"/>
            </div>

            <DataTableApp />

        </section>
    )
}