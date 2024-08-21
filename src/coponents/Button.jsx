import { Link } from "react-router-dom"

const Button = ({color, text, path}) => {
  return (
    <div>
        <Link to={`${path}`}>
            <button className="w-auto h-auto p-[10px] rounded-[15px] font-bold" style={{backgroundColor: color, marginTop: '20px'}}>{text}</button>
        </Link>
    </div>
  )
}

export default Button