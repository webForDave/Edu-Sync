const Input = ({type, placeholder, id}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} id={id} className="w-full h-auto p-[5px] rounded-[4px] my-[10px] border border-gray-400" />
    </div>
  )
}

export default Input;