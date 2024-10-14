import { ActionMeta, SingleValue } from "react-select";
import "./App.css";
import CustomButton from "./components/ui/CustomButton";
import CustomSelect from "./components/ui/CustomSelect";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

export interface OptionProps {
  value: string;
  label: string;
}

function App() {
  const options = [
    { value: "bady", label: "Bady" },
    { value: "bead", label: "Bead" },
    { value: "happy", label: "Happy" },
  ];

  const [selectedOption, setSelectedOption] =
    useState<SingleValue<OptionProps>>(null);

  const handleChange = (
    newValue: SingleValue<OptionProps>,
    actionMeta: ActionMeta<OptionProps>
  ) => {
    console.log("handleChange", newValue, actionMeta);
    setSelectedOption(newValue);
  };

  return (
    <div className="bg-slate-50 h-screen px-4 w-full">
      <Home />
      <LoginPage />
      <CustomSelect
        selectedOption={selectedOption}
        handleChange={handleChange}
        options={options}
        width="w-[13%]"
      />
      <CustomButton text="Button" width="" />
    </div>
  );
}

export default App;
