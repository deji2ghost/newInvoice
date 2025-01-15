import { PiInvoice, PiSignOut } from "react-icons/pi"
import logo from "/logo.svg"
import { BiStopwatch } from "react-icons/bi"
import { FcSettings, FcTodoList } from "react-icons/fc"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  return (
    <div className='w-full flex items-center'>
      <div className='hidden bg-purple-400 w-[25%] md:flex justify-center py-4'><img src={logo}/></div>
      <div className='w-full flex justify-between'>
        {/* mobile view */}
        <div className='md:hidden flex items-center gap-7 p-4'>
          <Link to="/invoice"><div><PiInvoice className={`${location.pathname === "/invoice" && "text-purple-700"}`} /></div></Link>
          <Link to="/stopwatch"><BiStopwatch className={`${location.pathname === "/stopwatch" && "text-purple-700"}` } /></Link>
          <Link to="/todo"><FcTodoList className={`${location.pathname === "/todo" && "text-purple-700"}`} /></Link>
        </div>
        <div className='md:hidden flex items-center gap-7 p-4'>
          <Link to=""><PiSignOut className={`${location.pathname === "" && "text-purple-700"}`} /></Link>
          <Link to="/settings"><FcSettings className={`${location.pathname === "/settings" && "text-purple-700"}`} /></Link>
        </div>
        {/* mobile ends here */}
        <h1 className="hidden md:block p-4">Stopwatch</h1>
        <div className="hidden md:flex flex-col gap-1 px-4">
          <div>profile icon</div>
          <p>Welcome Deji</p>
        </div>
      </div>
    </div>
  )
}

export default Header