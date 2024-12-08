import { useState } from "react";
import CustomButton from "../components/ui/CustomButton";
import CustomModal from "../components/ui/CustomModal";

function Home() {
  const [clicked, setClicked] = useState(false);

  const handleModal = () => {
    setClicked(true);
  };

  return (
    <div className="text-white overflow-hidden">
      <div className="w-full mt-2">
        <CustomButton
          className=""
          children={"Generate Invoice"}
          onClick={handleModal}
        />
      </div>

      <CustomModal
        className="w-[80%]"
        content={
          <>
            <div className="px-4 py-2 w-full flex items-center justify-between drop-shadow-md bg-slate-100">
              <h1>Modal</h1>
              <CustomButton children="&#10005;" />
            </div>
            <div className="mt-[60px]">inVoice</div>

            <div className="flex items-center justify-end gap-4">
              <CustomButton
                className="w-[20%]"
                children="Cancel"
              />
              <CustomButton
                className="w-[20%]"
                children={"Save"}
              />
            </div>
          </>
        }
        openModal={clicked}
      />
    </div>
  );
}

export default Home;
