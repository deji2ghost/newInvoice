import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";

const Main = () => {
  return (
    <div className="">
      <Header />
      <div className="flex w-full min-h-screen">
        <div className="hidden md:block w-[25%] bg-purple-700">
          <Sidebar />
        </div>
        <div className="bg-greyFragments-#FAFAFA p- w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
