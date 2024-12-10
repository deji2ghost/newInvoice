import { labelProps } from "../../data/propTypes"

const CustomLabel = ({label}: labelProps) => {
  return (
    <label className="text-[12px] text-greyFragments-#333333 font-[400] leading-[18px]">{label}</label>
  )
}

export default CustomLabel
