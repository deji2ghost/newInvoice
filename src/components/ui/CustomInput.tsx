import { BsEye, BsEyeSlash } from "react-icons/bs";
import { cn } from "../../lib/utils";
import React, { useState } from "react";
import { Label } from "./label";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showPassword?: boolean; // Define showPassword as an optional property
  width?: string
  labelText?: string
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, id, width, showPassword, labelText, type, ...props }, ref) =>{
  
  const [viewPassword, setViewPassword] = useState(false);

  const handleHidePassword = () => {
    setViewPassword(!viewPassword)
  }
  return (
    <div className={` ${width ? width : " w-full " } relative ${labelText && "flex flex-col gap-1"}`}>
      { labelText && <Label htmlFor={id}>{labelText}</Label>}
      <input
      className={cn("py-3 px-4 w-full border border-greyFragments-#D9D9D9 font-[400] rounded-[8px] text-[16px] outline-none", className)}
      type={viewPassword ? "text" : type}
      ref={ref}
      id={id}
      {...props}
      />
      { showPassword !== undefined &&
        (<div onClick={handleHidePassword} className="absolute top-10 right-2">{viewPassword ? 
        <BsEye className="text-[19px]" /> : <BsEyeSlash className="text-[19px]" />}</div>)
      }
    </div>
    
  );
}
)

export default CustomInput;
