import { Button } from '../components/atoms/button/button'
import { Input } from '../components/atoms/input/input'
import Image from 'next/image'

export const LoginPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="header">
                    <Image src='/images/logo.png' alt={'icon logo'}/>
                </div>
            </div>



            <section className='loginSection'>
                <div className='container'>
                    <div className='loginWrapper'>
                        <div className='loginWrapper--left-side'>
                            <Image src="/images/banner_1.PNG" alt={'icon logo'}/>
                        </div>
                        <div className='loginWrapper--right-side'>
                            <span className='title-bold'>Sign in</span>
                            <div className='inputGroup'>
                                <Input
                                    type="input-email"
                                    name="inputEmail"
                                    placeholder="Enter your email"
                                    // value={handlerValue("higherRepayment")}
                                    // onChange={(e) => handlerChangeNumber(e.target.value, e.target.name)}
                                />

                                <Input
                                    type="input-password"
                                    name="inputPassword"
                                    placeholder="Enter your password"
                                    // value={handlerValue("higherRepayment")}
                                    // onChange={(e) => handlerChangeNumber(e.target.value, e.target.name)}
                                />

                                <a href='#' className='font12-grey'>Forgot password ?</a>
                            </div>
                            <Button
                                classProps="btn-login"
                                label="Login"
                                // onClick={()=> useStore.setState({ isOpen: false })}
                                style={{marginRight: '20px'}}
                            />
                            {/* <button>Login</button> */}
                            <span className='font12-grey font12-grey--continue-with'>or continue with</span>
                            <div className='socmedWrapper'>
                                <button>
                                    <Image src="/images/icons/facebook.PNG" alt={'facebook'}/>
                                </button>
                                <button>
                                    <Image src="/images/icons/apple.PNG" alt={'apple'}/>
                                </button>
                                <button>
                                    <Image src="/images/icons/google.PNG" alt={'google'}/>
                                </button>
                            </div>

                            <span className='font-12 --bold'>You don't have account ? <a href='#' className='register-here'>Register here</a></span>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}