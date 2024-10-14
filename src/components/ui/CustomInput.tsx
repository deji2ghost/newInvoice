import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Form {
  label: string;
  placeholder: string;
  value: string;
  width: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomInput = ({
  label,
  placeholder,
  value,
  width,
  type,
  handleChange,
  showPassword,
  setShowPassword
}: Form) => {
  const togglePasswordVisibility = () => {
    console.log('toggle clicked')
    if(setShowPassword){
      setShowPassword(!showPassword)
      console.log(showPassword)
    }
  }
  return (
    <div className="text-DarkGrey flex flex-col">
      <label className="text-[12px] font-[400] leading-[18px]">{label}</label>
      <div className={`relative ${width} rounded-[8px]`}>
        <input
          className="py-3 w-full px-4 border-2 border-veryLightGray font-[400] rounded-[8px] text-[16px] outline-none focus:border-Purple focus:shadow-2xl"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {showPassword !== undefined && (
          showPassword ? (
            <FaEye className="absolute right-3 top-0 bottom-0 my-auto cursor-pointer" onClick={togglePasswordVisibility} />
          ) : (
            <FaEyeSlash className="absolute right-3 top-0 bottom-0 my-auto cursor-pointer" onClick={togglePasswordVisibility} />
          )
        )}
      </div>
    </div>
  );
};

export default CustomInput;
