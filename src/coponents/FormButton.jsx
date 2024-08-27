import { Link } from 'react-router-dom';

const FormButton = ({ text,backgroundColor, type }) => {
    return (
        <div>
            <button className={`w-full mt-[3px] h-auto p-[5px] text-[#fff] bg-[${backgroundColor}] rounded-[5px] lato-bold`} type={type} >{text}</button>
        </div>
    )
}

export default FormButton;