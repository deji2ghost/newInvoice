import { cn } from "../../lib/utils";
import React from "react";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) =>{
  
  return (
    <input
    className={cn("py-3 w-full px-4 border-2 border-veryLightGray text-DarkGrey font-[400] rounded-[8px] text-[16px] outline-none focus:border-Purple focus:shadow-2xl", className)}
    type={type}
    ref={ref}
    {...props}
    // <label className="text-[12px] text-DarkGrey font-[400] leading-[18px]">{label}</label>
        />
    
  );
}
)

export default CustomInput;
