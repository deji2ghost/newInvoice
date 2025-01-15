import AsyncSelect from "react-select/async";
import { promiseOptionsProps } from "../../data/data";

const CustomSelect = ({ arrayOptions }: promiseOptionsProps) => {
  return (
    <AsyncSelect
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={arrayOptions}
    />
  );
};

export default CustomSelect; 