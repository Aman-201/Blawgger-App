import React from "react";
import { useId } from "react";
const Input = React.forwardRef(function Input({label , type='text', className="", ...props },ref){
    const id=useId();
return <div className="w-full"> 
{label && <label className="block mb-1 pl-1" htmlFor={id}>{label}</label>}
<input type={type} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 border border-blue-200 w-full focus:bg-blue-50`} ref={ref}{...props} id={id}/>
</div>
})
export default Input;