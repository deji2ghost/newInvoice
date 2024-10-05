import { useState } from 'react'
import CustomButton from '../components/ui/CustomButton'
import InvoicePage from './InvoicePage'
import CustomModal from '../components/ui/CustomModal'

function Home() {
  const [ clicked, setClicked ] = useState(false)

  return (
    <div className='text-white flex items-start justify-normal min-h-screen overflow-hidden px-5'>
      <div className='w-full mt-2'>
        <CustomButton generate={true} setClicked={setClicked} clicked={clicked} text={'Generate Invoice'} />
        <InvoicePage />
      </div>

      {clicked ? <CustomModal openModal={clicked} /> : null}
    </div>
  )
}

export default Home