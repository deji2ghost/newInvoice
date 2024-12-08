import { FaChevronDown } from "react-icons/fa";
import "./App.css";
import CustomButton from "./components/ui/CustomButton";
import CustomSelect from "./components/ui/CustomSelect";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";

export interface OptionProps {
  value: string;
  label: string;
}

function App() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(()=> {
    console.log(selectedValue)
  }, [selectedValue])

  return (
    <div className="bg-slate-50 h-screen px-4 w-full">
      <Home />
      <LoginPage />
      <div className="relative">
        <CustomSelect
          className=""
          width="w-[40%]"
          options={[
            "food", "electricity", "education", "Lifestyle", "vacation"
          ]}
          value={selectedValue}
          onChange={handleChange}
        />
        <FaChevronDown className="group pointer-events-none absolute top-2.5 bg-orange-500 right-2.5 size-4 fill-white/60"/>
      </div>
      <CustomButton>
        load
      </CustomButton>
    </div>
  );
}

export default App;
