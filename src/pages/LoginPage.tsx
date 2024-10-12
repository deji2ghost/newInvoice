import { useState } from 'react'
import CustomInput from '../components/ui/CustomInput'
import CustomButton from '../components/ui/CustomButton'

const LoginPage = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
  return (
    <div>
      <CustomInput width='w-[13%]' type="text" label='Email' placeholder='Write Your Email Here' value={email} setValue={setEmail} />
      <CustomInput width='w-[13%]' type="text" label='PassWord' placeholder='Write Your PassWord Here' value={password} setValue={setPassword} />
      <CustomButton text={'Login'} width={'w-[13%]'} />
    </div>
  )
}

export default LoginPage