import image_user from '../../../../../public/images/icons/user.png'
import Image from 'next/image'

export const ProfileCard = (props) => {
    return (
        <>
            <div className='profile-section'>
                <Image src={image_user} alt={'user'} className='profile_user'/>
                <div className='profile-description'>
                    <span className='font-16_bold'>James Warden</span>

                    {props.isSubProfile ? 
                        <span className='idProfile'>ID: COSIRI011021220130139</span>
                    :
                        <span className='font-12font-16_bold'>Admin - Company A</span>
                    }
                </div>
            </div>
        </>
    )
}