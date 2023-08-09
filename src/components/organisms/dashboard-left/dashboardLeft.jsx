import 'boxicons';
import { useEffect } from 'react';
import { Button } from '../../atoms/button/button';

export const DashboardLeft = (props) => {

    return (
        <>
            <div className={props.isClose ? `sidebar close` : 'sidebar'}>
                <div className="logo-details">
                    <img src={require('../../../img/logo.png')} alt={'icon logo'} className='logo_full'/>
                    <img src={require('../../../img/icon_logo.png')} alt={'icon close'} className='logo_close'/>
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
                        <span>Need Help?</span>
                        <span>Please reach on</span>
                        <Button 
                            classProps="btn-login"
                            label="Details"

                        />
                </div>
            </div>
        </>
    )
}