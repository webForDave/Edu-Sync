import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import FormButton from "../coponents/formButton"
import Input from "../coponents/formInput"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

const SignUp = () => {

    const form = useForm();
    const {register, handleSubmit, formState:{errors}, reset, control} = form;

    const onSubmit = data => {
        console.log(data);

        reset();
    }

  return (
    <div>
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[100%] mx-[20px] md:w-[70%] lg:w-auto h-auto bg-[#fff] px-[50px] py-[30px] rounded-[10px]">
                <h1 className="fraunces-heading text-[#1D3446] text-[28px] text-center">Sign Up</h1>
                <p className="lato-bold text-center p-[10px] mb-[20px] text-gray-500">Ready to begin your learning journey?</p>

                {/* SIGNUP FORM */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">
                            <Input placeholder='Name' id='name' type='text'
                            register={register('name', {
                                required: 'Name is required'
                            })}
                            error={errors.name}
                            />
                            {errors.name && <p className="lato-bold text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </label>
                    </div>

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
                        <label htmlFor="create_password">
                            <Input placeholder='Create Password' id='create_password' type='password'
                            register={register('create_password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: 'Password must contain at least 8 characters, including letters and numbers'
                                  }
                            })}
                            error={errors.create_password}
                            />
                            {errors.create_password && <p className="lato-bold text-red-500 text-sm mt-1">{errors.create_password.message}</p>}

                        </label>
                        <label htmlFor="confim_password">
                            <Input placeholder='Confirm Password' id='confirm_password' type='password'
                            register={register('confirm_password', {
                                required: 'Please confirm your password',
                                validate: value =>
                                    value === create_password || 'Passwords do not match'
                            })}
                            error={errors.confirm_password}
                            />
                            {errors.confirm_password && <p className="lato-bold text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>}

                        </label>
                    </div>
                    <FormButton>Sign Up</FormButton>
                    {/* <DevTool control={control} /> */}
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