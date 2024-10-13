import './App.css'
import CustomSelect from './components/ui/CustomSelect'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'

function App() {
  const options = [
    { value: "bady", label: "Bady"},
    { value: "bead", label: "Bead"},
    { value: "happy", label: "Happy"}
  ]
  
  return (
    <div className='bg-slate-50 h-screen px-4'>
      <Home />
      <LoginPage />
      <CustomSelect options={options} width='w-[13%]'/>
    </div>
  )
}

export default App
