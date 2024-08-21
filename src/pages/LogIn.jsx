import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import Input from "../coponents/formInput"
import FormButton from "../coponents/formButton"

const LogIn = () => {
  return (
    <div>
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[100%] mx-[20px] md:w-[70%] lg:w-auto h-auto bg-[#fff] px-[50px] py-[30px] rounded-[10px]">
                <h1 className="fraunces-heading text-[#1D3446] text-[28px] text-center">Welcome Back!</h1>
                <p className="lato-bold text-center p-[10px] mb-[5px] text-gray-500">Continue your learning journey</p>

                {/* LOGIN FORM */}

                <form>
                    <div>
                        <label htmlFor="email">
                            <Input type='email' placeholder='Email Address' id='email'  />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <Input type='password' placeholder='Password' id='password'/>
                        </label>
                    </div>
                    <FormButton>Log In</FormButton>
                </form>

                <p className="py-[10px] lato-regular text-center text-gray-700 ">Don't have an account? <Link to='/sign-up' className="text-[#1D3446] font-bold">Sign Up</Link></p>

                <p className="text-center">or</p>

                <Link to="/google.com">
                    <button className="lato-black border border-gray-400 p-[6px] w-[100%] h-auto mx-auto flex justify-center items-center rounded-[6px] my-[10px]"><FcGoogle size={25} className="mx-[20px]" />Log in with Google</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default LogIn