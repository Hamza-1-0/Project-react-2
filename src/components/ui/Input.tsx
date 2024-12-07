import {InputHTMLAttributes} from "react";


interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...rest}:Iprops) => {
  return (
     <input  
     className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
     {...rest}/>
  )
};

export default  Input;