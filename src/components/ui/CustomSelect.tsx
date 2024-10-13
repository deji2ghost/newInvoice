import { useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];

interface OptionProps {
  value: string;
  label: string;
}

interface CustomSelect {
  options: OptionProps[];
  width: string
}

const CustomSelect = ({ options, width }: CustomSelect) => {
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
    <div className={`${width}`}>
      <Select
        defaultValue={selectedOption}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomSelect;
