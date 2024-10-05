import CustomButton from "./ui/CustomButton";

const ModalHeader = () => {
  return (
    <div className="absolute top-0 left-0 px-4 py-2 w-full flex items-center justify-between drop-shadow-md bg-slate-100">
      <h1>Modal</h1>
      <div className="flex gap-5 items-center justify-between">
        <CustomButton saveUpload={true} text="Save" />
        <h1 className="cursor-pointer py-2">&#10005;</h1>
      </div>
    </div>
  );
};

export default ModalHeader;
