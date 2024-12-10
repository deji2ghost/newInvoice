import { Checkbox } from '@headlessui/react'
import { customCheckBoxProps } from '../../data/propTypes'
import { cn } from '../../lib/utils'

const CustomCheckbox = ({ isChecked, setIsChecked, className }: customCheckBoxProps) => {
  return (
    <Checkbox
      checked={isChecked}
      onChange={setIsChecked}
      className={cn("group block size-4 rounded border bg-white data-[checked]:bg-blue-500", className)}
    >
      {/* Checkmark icon */}
      <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Checkbox>
  )
}

export default CustomCheckbox
