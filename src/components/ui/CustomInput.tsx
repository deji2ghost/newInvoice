import { BsEyeSlash } from "react-icons/bs";
import { cn } from "../../lib/utils";
import React from "react";
import { TiEyeOutline } from "react-icons/ti";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showPassword?: boolean; // Define showPassword as an optional property
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, showPassword, type, ...props }, ref) =>{
  
  return (
    <div className="relative">
      <input
      className={cn("py-3 w-full px-4 border-2 border-veryLightGray text-DarkGrey font-[400] rounded-[8px] text-[16px] outline-none focus:border-Purple focus:shadow-2xl", className)}
      type={type}
      ref={ref}
      {...props}
      // <label className="text-[12px] text-DarkGrey font-[400] leading-[18px]">{label}</label>
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
