import { Link } from "react-router-dom";
import FormButton from "../coponents/formButton";
import { useState } from "react";

const SignUp = () => {


    return (
        <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
            <div className="w-[80%] md:w-[50%] lg:w-[25%] h-auto p-[20px] rounded-[10px] bg-[#fff]">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-[40px] text-center fraunces-heading text-[#1D3446]">Sign Up</h1>
                    <p className="lato-regular-italic py-[5px]">Ready to take your learning to the next level?</p>
                    <label htmlFor="first_name">
                        <input type="text" id='first_name' placeholder="First Name" className="lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]" value={name} onChange={handleNameChange}/>
                    </label>
                    <label htmlFor="last_name">
                        <input type="text" id='last_name' placeholder="Last Name" className="lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]" value={last_name} onChange={handleLastNameChange}/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" id='email' placeholder="Email Address" className="lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]" name="email" value={email} onChange={handleEmailChange} />
                    </label>
                    <label htmlFor="password">
                        <input type="password" id='password' placeholder="Password" className="lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]" name="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <label htmlFor="confirm_password">
                        <input type="password" id='confirm_password' placeholder="Confirm Password" className="lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]" name="confirm_password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </label>
                    <FormButton text='Sign up' backgroundColor='#1D3446' type='submit' />
                </form>
                <p className="lato-bold-italic p-[10px] text-center">Already have an account? <Link to='/log-in' className="text-[#1D3446]">Log In</Link></p>
            </div>
        </div>
    )
}
export default SignUp;