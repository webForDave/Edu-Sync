import { Link } from "react-router-dom";
import FormButton from "../coponents/formButton";
import { useState } from "react";
import FormInput from "../coponents/FormInput";

const INPUT_FIELDS = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}

const SignUp = () => {
    const [formData, setFormData] = useState(INPUT_FIELDS);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = e => {
        const value = e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: value
        })

    }

    const validateFields = () => {
        const errors = {};
    
        if (formData.first_name.trim() === "") {
          errors.first_name = "First name is required";
        }
        if (formData.last_name.trim() === "") {
          errors.last_name = "Last name is required";
        }
        if (formData.email.trim() === "") {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Email address is invalid";
        }
        if (formData.password === "") {
          errors.password = "Password is required";
        } else if (formData.password.length < 6) {
          errors.password = "Password must be at least 6 characters long";
        }
        if (formData.confirm_password === "") {
          errors.confirm_password = "Password confirmation is required";
        } if (formData.confirm_password != formData.password) {
          errors.confirm_password = "Passwords do not match";
        }
    
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = validateFields();
    
        if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
        } else {
          alert("Registration successful!");
          setFormErrors({});
          setFormData(INPUT_FIELDS);
        }
    };
    

    return (
        <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
            <div className="w-[85%] md:w-[50%] lg:w-[25%] h-auto p-[25px] rounded-[10px] bg-[#fff]">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-[40px] text-center fraunces-heading text-[#1D3446]">Sign Up</h1>
                    <p className="lato-regular-italic py-[5px]">Ready to take your learning to the next level?</p>

                    <label htmlFor="first_name">
                        <FormInput type='text' id='first_name' name='first_name' placeholder='First Name' value={formData.first_name} handleChange={handleChange} error={formErrors.first_name} />
                    </label>

                    <label htmlFor="last_name">
                        <FormInput type='text' id='last_name' name='last_name' placeholder='Last Name' value={formData.last_name} handleChange={handleChange} error={formErrors.last_name} />
                    </label>

                    <label htmlFor="email">
                        <FormInput type='email' id='email' name='email' placeholder='Email Address' value={formData.email} handleChange={handleChange} error={formErrors.email} />
                    </label>

                    <label htmlFor="password">
                        <FormInput type='password' id='password' name='password' placeholder='Password' value={formData.password} handleChange={handleChange} error={formErrors.password} />
                    </label>

                    <label htmlFor="confirm_password">
                        <FormInput type='password' id='confirm_password' name='confirm_password' placeholder='Confirm Password' value={formData.confirm_password} handleChange={handleChange} error={formErrors.confirm_password} />
                    </label>


                    <FormButton text='Sign up' backgroundColor='#1D3446' type='submit' />
                </form>
                <p className="lato-bold-italic p-[10px] text-center">Already have an account? <Link to='/log-in' className="text-[#1D3446]">Log In</Link></p>
            </div>
        </div>
    )
}
export default SignUp;