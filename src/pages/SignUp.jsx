import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import FormButton from "../coponents/formButton"
import Input from "../coponents/formInput"

const SignUp = () => {
  return (
    <div>
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[100%] mx-[20px] md:w-[70%] lg:w-auto h-auto bg-[#fff] px-[50px] py-[30px] rounded-[10px]">
                <h1 className="fraunces-heading text-[#1D3446] text-[28px] text-center">Sign Up</h1>
                <p className="lato-bold text-center p-[10px] mb-[20px] text-gray-500">Ready to begin your learning journey?</p>

                {/* SIGNUP FORM */}

                <form>
                    <div>
                        <label htmlFor="name">
                            <Input placeholder='Name' id='name' type='text' />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            <Input placeholder='Email Address' id='email' type='email' />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <Input placeholder='Password' id='password' type='password' />
                        </label>
                    </div>
                    <FormButton>Sign Up</FormButton>
                </form>

                <p className="py-[10px] lato-regular text-center text-gray-700 ">Already have an account? <Link to='/log-in' className="text-[#1D3446] font-bold">Log In</Link></p>

                <p className="text-center">or</p>

                <Link to="/google.com">
                    <button className="lato-black border border-gray-400 p-[6px] w-[100%] h-auto mx-auto flex justify-center items-center rounded-[6px] my-[10px]"><FcGoogle size={25} className="mx-[20px]" />Sign up with Google</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp