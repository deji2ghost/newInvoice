import { cn } from "../../lib/utils";

interface ModalProps {
  openModal: boolean;
  content: JSX.Element
  className: string
}

const CustomModal = ({ openModal, content, className }: ModalProps) => {

  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } " absolute top-0 left-0 h-screen w-full bg-slate-800 bg-opacity-60 z-10 "`}
    >
      <div className={cn(` " absolute w-full left-0 right-0 mx-auto bg-slate-50 text-black p-5 rounded-md h-[400px] top-1/2 -translate-y-1/2 flex flex-col justify-between " ${className}`)}>
        { content }
      </div>
    </div>
  );
};

export default CustomModal;
