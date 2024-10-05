import { Button } from "@headlessui/react";
import { ThreeCircles } from "react-loader-spinner";

interface ButtonProps {
  text: string;
  setClicked?: React.Dispatch<React.SetStateAction<boolean>>
  clicked?: boolean
  generate?: boolean
  saveUpload?: boolean
}

const CustomButton = ({ text, setClicked, generate, clicked, saveUpload }: ButtonProps) => {

  const handleAllClicked = () => {
    console.log("true")
    if(!clicked && setClicked){
      console.log('very true')
      setClicked(!clicked)
    }
  }
  const buttonClass =
    "bg-orange-500 hover:bg-opacity-80 rounded-md text-white p-2 outline-none border-none shadow-md hover:translate-y-[1px] text-[#fff] flex items-center justify-center";

  const isGenerate = generate ? "ml-[89%] w-[11%]" : " "
  const isSaveUpload = saveUpload ? "w-[90px]" : " "
  return (
    <Button className={`${buttonClass} ${isGenerate} ${isSaveUpload}`} onClick={handleAllClicked}>
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
