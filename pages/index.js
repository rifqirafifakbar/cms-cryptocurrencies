/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Button } from "../src/components/atoms/button/button";
import { Input } from "../src/components/atoms/input/input";
import logo_baner from "../public/images/logo.png";
import banner_1 from "../public/images/banner_1.PNG";
import facebook_logo from "../public/images/icons/facebook.PNG";
import apple_logo from "../public/images/icons/apple.PNG";
import google_logo from "../public/images/icons/google.PNG";

export default function Home() {
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
              <div className="inputGroup">
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

                <a href="#" className="font12-grey">
                  Forgot password ?
                </a>
              </div>
              <Button
                classProps="btn-login"
                label="Login"
                // onClick={()=> useStore.setState({ isOpen: false })}
                style={{ marginRight: "20px" }}
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
