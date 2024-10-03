import { Button } from '@headlessui/react'
import { ReactNode } from 'react'

interface ButtonProps{
    children: ReactNode
}
const CustomButton = ({children}: ButtonProps) => {
  return (
    <Button className="bg-orange-500 hover:bg-opacity-80 rounded-md text-white p-2">
      {children}
    </Button>
  )
}

export default CustomButton
