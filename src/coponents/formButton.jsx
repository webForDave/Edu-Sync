const FormButton = (props) => {
  return (
    <div>
        <button className="bg-[#1D3446] w-full h-auto p-[8px] mx-auto rounded-[8px] text-[#fff] lato-bold">{props.children}</button>
    </div>
  )
}

export default FormButton;