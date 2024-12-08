import { Select } from '@headlessui/react'
import { CustomSelectProps } from '../../data/propTypes'
import { cn } from '../../lib/utils'

export default function CustomSelect({options, className, onChange, value }: CustomSelectProps) {
  return (
          <Select
            className={cn(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black', 'bg-orange-500 hover:bg-opacity-80 rounded-md p-1 outline-none border-none shadow-md hover:translate-y-[1px] text-[#fff]', className
            )}
            value={value}
            onChange={onChange}
          >
            <option value="null">Please select an Invoice</option>
            {
              options.map((option, index) => {
                return(
                  <option value={option} key={index}>{option}</option>
                )
              })
            }
          </Select>
          // <FaChevronDown className="group pointer-events-none absolute top-2.5 bg-orange-500 right-2.5 size-4 fill-white/60"/>
  )
}
