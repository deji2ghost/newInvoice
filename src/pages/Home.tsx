import { useState } from 'react'
import CustomButton from '../components/ui/CustomButton'
import CustomModal from '../components/ui/CustomModal'

function Home() {
  const [ clicked, setClicked ] = useState(false)

  return (
    <div className='text-white min-h-screen overflow-hidden px-5'>
      <div className='w-full mt-2'>
        <CustomButton width="w-[13%]" setClicked={setClicked} clicked={clicked} text={'Generate Invoice'} />
      </div>

      {clicked ? <CustomModal openModal={clicked} /> : null}
    </div>
  )
}

export default Home