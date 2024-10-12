interface Form {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  width: string;
  type: string;
}

const CustomInput = ({
  label,
  placeholder,
  value,
  setValue,
  width,
  type,
}: Form) => {
  return (
    <div className="text-DarkGrey flex flex-col">
      <label className="text-[12px] font-[400] leading-[18px]">{label}</label>
      <input
        className={`${width} py-3 px-4 border-2 border-veryLightGray font-[400] rounded-[8px] text-[16px] outline-none focus:border-Purple focus:shadow-2xl `}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
