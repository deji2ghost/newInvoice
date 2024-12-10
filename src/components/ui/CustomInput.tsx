import { BsEyeSlash } from "react-icons/bs";
import { cn } from "../../lib/utils";
import React from "react";
import { TiEyeOutline } from "react-icons/ti";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showPassword?: boolean; // Define showPassword as an optional property
  width?: string
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, width, showPassword, type, ...props }, ref) =>{
  
  return (
    <div className={` ${width ? width : " w-full " } " relative " `}>
      <input
      className={cn("py-3 px-4 w-full border border-greyFragments-#D9D9D9 font-[400] rounded-[8px] text-[16px] outline-none", className)}
      type={type}
      ref={ref}
      {...props}
      />
      { showPassword !== undefined &&
        (<div className="absolute right-0">showPassword ? 
        <TiEyeOutline /> : <BsEyeSlash /></div>)
      }
    </div>
    
  );
}
)

export default CustomInput;
