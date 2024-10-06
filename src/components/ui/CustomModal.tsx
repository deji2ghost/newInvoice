import { useState } from "react";
import CustomButton from "./CustomButton";

interface ModalProps {
  openModal: boolean;
}

const CustomModal = ({ openModal }: ModalProps) => {
  const [ clicked, setClicked ] = useState(false)

  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } " fixed top-0 left-0 h-screen w-full bg-slate-800 bg-opacity-60 "`}
    >
      <div className="relative w-[80%] mx-auto bg-slate-50 text-black p-5 rounded-md h-[400px] top-1/2 -translate-y-1/2 flex flex-col justify-between">
        <div className="absolute top-0 left-0 px-4 py-2 w-full flex items-center justify-between drop-shadow-md bg-slate-100">
          <h1>Modal</h1>
          <CustomButton text="&#10005;" width="" />
        </div>
        <p className="mt-[60px]">This is the modal content</p>

        <div className="flex items-center justify-end gap-4">
          <CustomButton width="w-[20%]" setClicked={setClicked} clicked={clicked} text='Cancel' />
          <CustomButton width="w-[20%]" setClicked={setClicked} clicked={clicked} text={'Save'} />
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
