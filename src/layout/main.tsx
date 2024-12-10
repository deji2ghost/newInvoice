import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

const Main = () => {
  return (
    <div className="">
      <Header />
      <div className="flex w-full min-h-screen">
        <div className="w-[25%] bg-purple-700"></div>
        <div className="bg-[#FAFAFA] w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
