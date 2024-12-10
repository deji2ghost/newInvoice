export interface CustomSelectProps {
  options: string[];
  className?: string;
  width?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export interface customCheckBoxProps {
  isChecked: boolean;
  setIsChecked: () => void;
  className: string;
}

export interface OptionProps {
  value: string;
  label: string;
}

export interface labelProps {
    label: string
}