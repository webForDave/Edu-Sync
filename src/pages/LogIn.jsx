import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import Input from "../coponents/formInput"
import FormButton from "../coponents/formButton"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"

const LogIn = () => {
    // const [successMessage, setSuccessMessage] = useState('');


    const form = useForm();
    const { register, handleSubmit, formState: {errors}, reset } = form;

    const onSubmit = async data => {
        //Handle form data
        try{
            const mockAPI = 'http://localhost:5000/auth';
            const response = await axios.post(mockAPI, data);

        } catch (error){
            setErrorMessage('Failed to submit form. Please try again.');
        }

        //clear inputs 
        reset();

    }

  return (
    <div>
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[100%] mx-[20px] md:w-[70%] lg:w-auto h-auto bg-[#fff] px-[50px] py-[30px] rounded-[10px]">
                <h1 className="fraunces-heading text-[#1D3446] text-[28px] text-center">Welcome Back!</h1>
                <p className="lato-bold text-center p-[10px] mb-[5px] text-gray-500">Continue your learning journey</p>

                {/* LOGIN FORM */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* {successMessage && <p className="lato-bold text-green-500">{successMessage}</p>} */}
                    <div>
                        <label htmlFor="email">
                            <Input type='email' placeholder='Email Address' id='email'
                            register={register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                    message: 'Please enter a valid Email Address'
                                }
                            })}
                            error={errors.email}
                            />
                            {errors.email && <p className="lato-bold text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <Input type='password' placeholder='Password' id='password'
                                register={register('password', {
                                    required: 'Password is Required',
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message:'Password must be at least 8 characters long and include letters and numbers'
                                    }
                                })}
                                error={errors.password}
                            />
                            {errors.password && <p className="lato-bold text-red-500 text-sm mt-1 max-w-xs">{errors.password.message}</p>}
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