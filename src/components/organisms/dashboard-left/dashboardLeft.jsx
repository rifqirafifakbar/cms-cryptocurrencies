// import 'boxicons';
import { useEffect } from 'react';
import { Button } from '../../atoms/button/button';
import logo_full from '../../../../public/images/logo.png'
import logo_mobile from '../../../../public/images/icon_logo.png'
import Image from 'next/image'

export const DashboardLeft = (props) => {

    return (
        <>
            <div className={props.isClose ? `sidebar close` : 'sidebar'}>
                <div className="logo-details">
                    <Image src={logo_full} alt={'icon logo'} className='logo_full'/>
                    <Image src={logo_mobile} alt={'icon close'} className='logo_close'/>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <box-icon size="md" name='grid-alt' className="box--select" border='square' color="grey"></box-icon>
                            <span className="link_name">Dashboards</span>
                        </a>
                        
                    </li>
                    <p>PAGES</p>
                    <li>
                        <a href="#">
                            <box-icon size="md" name='cog' className="box" border='square' color="grey"></box-icon>
                            <span className="link_name">Settings</span>
                        </a>
                    </li>
                </ul>

                <div className='box-sidebar'>
                    <div className='description'>
                    </div>
                        <div className='asking-square'>?</div>
                        <span className='description_need_help'>Need Help?</span>
                        <span className='description_reach'>Please reach on</span>
                        <Button 
                            classProps="btn-details"
                            label="Details"
                        />
                </div>

                <div className='asking-square-mobile'>
                    <div className='asking-square'>?</div>
                </div>
            </div>
        </>
    )
}