const Input = ({type, placeholder, id, register, error}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} id={id} className={`w-full h-auto p-[5px] rounded-[4px] my-[10px] border ${error ? "border-red-600" : "border-gray-400"}`} 
        {...register}
        />
    </div>
  )
}

export default Input;