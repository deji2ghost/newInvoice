import ModalHeader from "../ModalHeader";

interface ModalProps {
  openModal: boolean;
}

const CustomModal = ({ openModal }: ModalProps) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } " fixed top-0 left-0 h-screen w-full bg-slate-800 bg-opacity-60 z-90"`}
    >
      <div className="relative w-[80%] mx-auto bg-slate-50 text-black py-2 px-4 rounded-md h-[400px] top-1/2 -translate-y-1/2">
        <ModalHeader />
      </div>
    </div>
  );
};

export default CustomModal;
