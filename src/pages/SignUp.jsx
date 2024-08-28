import { Link, useNavigate } from "react-router-dom";
import FormButton from "../coponents/formButton";
import { useState } from "react";
import FormInput from "../coponents/FormInput";
import axios from "axios";

const FORM_INPUT = {
  first_name: '',
  last_name: '',
  email: '', 
  password: '',
  confirm_password: ''
}

const SignUp = () => {
  const [formData, setFormData] = useState(FORM_INPUT);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  let [confirmPasswordMessage, setConfirmPasswordMessage] = useState(false);
  let [emailMessage, setEmailMessage] = useState(false);

  const handleChange = e => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })    
  };
  
  const formValidator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true

    if(formData.first_name === '') {
      setFirstNameError(true)
      isValid = false;
    } else {
      setFirstNameError(false);
    }

    if(formData.last_name === '') {
      setLastNameError(true);
      isValid = false;
    } else {
      setLastNameError(false)
    }

    if(formData.email === '') {
      setEmailError(true);
      isValid = false;
    } else if(formData.email != '') {
      setEmailError(false);
    }

    // if(emailRegex.test(formData.email)) {
    //   setEmailMessage(true);
    //   isValid = false;
    // } else {
    //   setEmailMessage(false); 
    // }
    console.log(!emailRegex.test(formData.email))

    if(formData.password === '') {
      setPasswordError(true);
      isValid = false;
    } else if(formData.password != '') {
      setPasswordError(false);
    }

    if(formData.confirm_password === '') {
      setConfirmPasswordError(true);
      isValid = false;
    } else if(formData.confirm_password !== formData.password) {
      setConfirmPasswordError(false);
      setConfirmPasswordMessage(true);
      isValid = false
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordMessage(false);
    }

    return isValid;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = formValidator();

    try{
      if(isValid) {
        setFormData(FORM_INPUT);
      }
      const mockAPI = 'http://localhost:4000/users';
      const response = await axios.post(mockAPI, formData);
      console.log(response)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
      <div className="w-[85%] md:w-[50%] lg:w-[25%] h-auto p-[25px] rounded-[10px] bg-[#fff]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[40px] text-center fraunces-heading text-[#1D3446]">Sign Up</h1>
          <p className="lato-regular-italic py-[5px]">Ready to take your learning to the next level?</p>

          <label htmlFor="first_name">
            <FormInput type='text' id='first_name' name='first_name' placeholder='First Name' value={formData.first_name} handleChange={handleChange} error={firstNameError} />
          </label>

          <label htmlFor="last_name">
            <FormInput type='text' id='last_name' name='last_name' placeholder='Last Name' value={formData.last_name} handleChange={handleChange} error={lastNameError}  />
          </label>

          <label htmlFor="email">
            <FormInput  id='email' name='email' placeholder='Email Address' value={formData.email} handleChange={handleChange} error={emailError} emailMessage={emailMessage}/>
          </label>

          <label htmlFor="password">
            <FormInput type='password' id='password' name='password' placeholder='Password' value={formData.password} handleChange={handleChange} error={passwordError} />
          </label>

          <label htmlFor="confirm_password">
            <FormInput type='password' id='confirm_password' name='confirm_password' placeholder='Confirm Password' value={formData.confirm_password} handleChange={handleChange} error={confirmPasswordError} confirmPasswordMessage={confirmPasswordMessage} />
          </label>

          <FormButton text='Sign up' backgroundColor='#1D3446' type='submit' />
        </form>
        <Link to='/google.com'><FormButton text='Sign up with Google' backgroundColor='#1D3446'/></Link>
        <p className="lato-bold-italic p-[10px] text-center">Already have an account? <Link to='/log-in' className="text-[#1D3446]">Log In</Link></p>
      </div>
    </div>
  )
}
export default SignUp;