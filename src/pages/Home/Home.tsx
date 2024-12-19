import { useState } from "react";
import CustomButton from "../../components/ui/customButton"
import CustomModal from "../../components/ui/customModal";
import CustomSelect from "../../components/ui/customSelect";
import { ColourOption, colourOptions } from "../../data/data";
import CustomCheckbox from "../../components/ui/customCheckbox";
import { DatePickerWithRange } from "@/components/layout/datePicker/datePicker";
import CustomTab from "@/components/layout/customTabs/customTab";

function Home() {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  const handleModal = () => {
    setClicked(true);
  };

  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const promiseOptions = (inputValue: string) =>
    new Promise<ColourOption[]>((resolve) => {
      setTimeout(() => {
        resolve( filterColors(inputValue) // Show default options if no input
      );
      }, 1000);
    });

  return (
    <div className="text-white overflow-hidden min-h-screen">
      <div className="w-full mt-2">
        <div className="flex flex-col items-center gap-6">
          <CustomButton
            className=""
            children={"Generate Invoice"}
            onClick={handleModal}
            loading={false}
          />
          <CustomButton
            className=""
            children={"Handle Dropdown"}
            onClick={toggleDropdown}
            dropDown={isOpen}
            menuItems={["blood", "wind", "rema"]}
          />
          <DatePickerWithRange />
        </div>
        <CustomCheckbox
          className=""
          isChecked={checked}
          setIsChecked={()=> setChecked(!checked)}
          labelText="click here to tick box"
        />
      </div>
        <CustomSelect 
          arrayOptions={promiseOptions}
        />
        
        <CustomTab headerTwo="header 2" headerOne="header 1" bodyOne={"this is the first body"} bodyTwo={"this is the second body"}/>

      <CustomModal
        title="This is a pop up modal"
        content={
          <p>Generate Invoice here</p>
        }
        footer={
          <div>
            <CustomButton
              children={"cancel"}
            />
            <CustomButton 
              children={"generate invoice"}
            />
          </div>
        }
        closeModal={() => setClicked(false)}
        className="w-[100%]"
        openModal={clicked}
      />
    </div>
  );
}

export default Home;
