import { useState } from "react";
import FormInput from "../coponents/FormInput";
import FormButton from "../coponents/formButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FORM_INPUT = {
  email: '', 
  password: ''
}

const LogIn = () => {
  const [formData, setFormData] = useState(FORM_INPUT);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const formValidator = () => {
    let isValid = true;

    if(formData.email === '') {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if(formData.password === '') {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;

  }

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = formValidator();

    try{
      if(isValid) {
        setFormData(FORM_INPUT);
        const mockAPI = ''
        const response = await axios.post(mockAPI, formData);
        console.log(response);
        navigate('/dashboard.jsx');
      }

      
    } catch(error) {
      console.log(error);
    }
  }


  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
        <div className="w-[85%] md:w-[50%] lg:w-[25%] h-auto p-[25px] rounded-[10px] bg-[#fff]">
            <form onSubmit={handleSubmit}>
                <h1 className="text-[40px] text-center fraunces-heading text-[#1D3446]">Log In</h1>
                <p className="lato-regular-italic py-[5px]">Welcome Back, continue your journey.</p>

                <label htmlFor="email">
                  <FormInput type='email' id='email' name='email' value={formData.email} placeholder='Email Address' handleChange={handleChange} error={emailError} />
                </label>

                <label htmlFor="password">
                  <FormInput type='password' id='password' name='password' value={formData.password} placeholder='Password' handleChange={handleChange} error={passwordError} />
                </label>

                <FormButton text='Log In' backgroundColor='#1D3446' type='submit' />
            </form>
            <p className="lato-bold-italic p-[10px] text-center">Don't have an account? <Link to='/sign-up' className="text-[#1D3446]">Sign Up</Link></p>
        </div>
    </div>
  )
}

export default LogIn