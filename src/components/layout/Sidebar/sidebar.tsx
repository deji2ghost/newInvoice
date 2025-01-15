import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation()
  return (
    <div className="flex flex-col items-center text-[14px] justify-between text-center min-h-screen p-6">
      <div className="w-full flex flex-col gap-[20px] font-medium text-[14px]">
        <Link to="/invoice">
          <h1 className={ `${location.pathname === "/invoice" && "border-none bg-purpleFragments-#BEADFF text-purple-700 text-[18px]"} border border-purpleFragments-#BEADFF cursor-pointer p-3 rounded-lg`}>
            Invoice
          </h1>
        </Link>
        <Link to="/stopwatch">
          <h1 className={ `${location.pathname === "/stopwatch" && "border-none bg-purpleFragments-#BEADFF text-purple-700 text-[18px]"} border border-purpleFragments-#BEADFF cursor-pointer p-3 rounded-lg`}>
            Stopwatch
          </h1>
        </Link>
        <Link to="/todo">
          <h1 className={ `${location.pathname === "/todo" && "border-none bg-purpleFragments-#BEADFF text-purple-700 text-[18px]"} border border-purpleFragments-#BEADFF cursor-pointer p-3 rounded-lg`}>
            Todo List
          </h1>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-[20px] font-medium text-[14px]">
        <Link to="/">
          <h1 className={ `${location.pathname === "/" && "border-none bg-purpleFragments-#BEADFF text-purple-700 text-[18px]"} border border-purpleFragments-#BEADFF cursor-pointer p-3 rounded-lg`}>
            Sign out
          </h1>
        </Link>
        <Link to="/settings">
          <h1 className={ `${location.pathname === "/settings" && "border-none bg-purpleFragments-#BEADFF text-purple-700 text-[18px]"} border border-purpleFragments-#BEADFF cursor-pointer p-3 rounded-lg`}>
            Settings
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
