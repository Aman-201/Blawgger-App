import { useId } from "react";

function Select({className='', options, label , ...props},ref){
    const id=useId();
    return <div className={` w-full`}>
       {label && <label htmlFor={id} className=""></label>}
       <select {...props} id={id} ref={ref} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 border border-gray-200 w-full focus:bg-gray-50`}>
        {options?.map((option)=>{
             <options key={option}>
                {option}
            </options>
        })}
       </select>
    </div>

}
export default React.forwardRef(Select);