import { Button } from "@headlessui/react";
import { ThreeCircles } from "react-loader-spinner";

interface ButtonProps {
  text: string;
}

const CustomButton = ({ text }: ButtonProps) => {
  const buttonClass =
    "bg-orange-500 hover:bg-opacity-80 rounded-md text-white p-2 outline-none border-none shadow-md hover:translate-y-[1px] w-[11%] text-[#fff] flex items-center justify-center";
  return (
    <Button className={buttonClass}>
      {text ? text :
      <ThreeCircles
        visible={true}
        height="20"
        width="20"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />}
    </Button>
  );
};

export default CustomButton;
