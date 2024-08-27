const FormInput = ({type, placeholder, id, name, error, value, handleChange, confirmPasswordMessage}) => {
  return (
    <div>
        {error && <p className="lato-regular-italic text-red-600">{placeholder} is Required *</p>}
        {confirmPasswordMessage && <p className="lato-regular-italic text-red-600">Passwords do not match</p>}
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={handleChange} className={`${error ? 'lato-bold w-full h-auto my-[5px] p-[5px] border border-red-600 rounded-[4px]' : 'lato-bold w-full h-auto my-[10px] p-[5px] border border-[#1D3446] rounded-[4px]'}`} />
    </div>
  )
}

export default FormInput