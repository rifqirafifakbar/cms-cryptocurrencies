/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Button } from "../src/components/atoms/button/button";
import { Input } from "../src/components/atoms/input/input";
import logo_baner from "../public/images/logo.PNG";
import banner_1 from "../public/images/banner_1.PNG";
import facebook_logo from "../public/images/icons/facebook.PNG";
import apple_logo from "../public/images/icons/apple.PNG";
import google_logo from "../public/images/icons/google.PNG";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isval, setIsVal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [valPass, setValPass] = useState("");
  const [ isValidPass, setIsValidPass] = useState(true);
  const [ initLogin, setInitLogin] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email);
  }

   // Check the length of the input
   const checkPasswordLength = (password) => {
    if (password.length >= 8) {
      return true
    } 
    return false;
  }
  
  // Check for special characters
  const checkSpecialCharacters = (password) => {
    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	  if (pattern.test(password)) {
      return true;
    } 

    return false;
  }
  
  // Check for an uppercase character
  const checkUppercase = (password) => {
    const pattern = /[A-Z]/;
    if (pattern.test(password)) {
      return true
    } 

    return false;
  }
  
  // Check for a number
  const checkNumber = (password) => {
    const pattern = /[0-9]/;
	  if (pattern.test(password)) {
      return true
    } 

    return false;
  }

  const handlerChange = (e) => {
		let email = e.target.value,
			emailValidate = validateEmail(email);
    setIsVal(e.target.value)
    setIsValid(emailValidate || e.target.value.length === 0 ? true : false)
    setInitLogin(emailValidate || e.target.value.length > 0 ? true : false)
	}

  const handlerPasswordChange = (e) => {
    setValPass(e.target.value);
    
    const passLength = checkPasswordLength(e.target.value);
    const passSpecial = checkSpecialCharacters(e.target.value);
    const passUpperCase= checkUppercase(e.target.value);
    const passNumber  = checkNumber(e.target.value);

    if (passLength && passSpecial && passUpperCase && passNumber){
      setIsValidPass(true)
      setInitLogin(true)
    }else {
      setIsValidPass(false)
      setInitLogin(false)
    }
     
  };

  const handlerButton = () => {

    if(isValidPass && isValid & initLogin){
      router.push('/dashboard')

    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <Image src={logo_baner} alt={"icon logo"} />
        </div>
      </div>
      <section className="loginSection">
        <div className="container">
          <div className="loginWrapper">
            <div className="loginWrapper--left-side">
              <Image src={banner_1} alt={"icon logo"} />
            </div>
            <div className="loginWrapper--right-side">
              <span className="title-bold">Sign in</span>
              <span className="title-mobile">Lorem ipsum is simply</span>
              <div className="inputGroup">
                <Input
                  type="input-email"
                  name="inputEmail"
                  placeholder="Enter your email"
                  value={isval}
                  warningText="Invalid e-mail address"
                  onChange={(e) => handlerChange(e)}
                  isRequired={isValid ? false : true}
                  className={isValid ? false : "required"}
                />

                <Input
                  type="input-password"
                  name="inputPassword"
                  placeholder="Enter your password"
                  warningText="Password did match"
                  onChange={(e) => handlerPasswordChange(e)}
                  value={valPass}
                  isRequired={isValidPass ? false : true}
                  className={isValidPass ? false : "required"}
                />
              </div>
              <Button
                classProps="btn-login"
                label="Login"
                // onClick={()=> useStore.setState({ isOpen: false })}
                style={{ marginRight: "20px" }}
                onClick={() => handlerButton()}
              />
              {/* <button>Login</button> */}
              <span className="font12-grey font12-grey--continue-with">
                or continue with
              </span>
              <div className="socmedWrapper">
                <button>
                  <Image src={facebook_logo} alt={"facebook"} />
                </button>
                <button>
                  <Image src={apple_logo} alt={"apple"} />
                </button>
                <button>
                  <Image src={google_logo} alt={"google"} />
                </button>
              </div>

              <span className="font-12 --bold">
                You don't have account ?{" "}
                <a href="#" className="register-here">
                  Register here
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
