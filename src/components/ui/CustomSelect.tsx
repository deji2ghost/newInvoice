import { ActionMeta, SingleValue } from "react-select";
import { OptionProps } from "../../App";
import Select from "react-select";

interface CustomSelect {
  options: OptionProps[];
  width: string;
  handleChange: (
    newValue: SingleValue<OptionProps>,
    actionMeta: ActionMeta<OptionProps>
  ) => void;
  selectedOption: SingleValue<OptionProps>;
}

const CustomSelect = ({ options, width, handleChange, selectedOption }: CustomSelect) => {
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
