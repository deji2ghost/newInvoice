import { Label } from "@headlessui/react"
import { labelProps } from "../../data/propTypes"

const CustomLabel = ({label, headless}: labelProps) => {
  return (
    <>
    { headless ? <Label className="text-[12px] text-greyFragments-#333333 font-[400] leading-[18px]">{label}</Label> : <label className="text-[12px] text-greyFragments-#333333 font-[400] leading-[18px]">{label}</label>}
    </>
  )
}

export default CustomLabel
