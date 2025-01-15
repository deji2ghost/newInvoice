interface Billed {
  billedFrom: string;
  billedTo: string;
}
interface service {
  serviceProviderPlace: string;
  serviceProviderLocation: string;
  serviceProviderNumber: string;
  patientDetails: string;
  patientDetailsNumber: string;
};

export interface promiseOptionsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arrayOptions: (inputValue: string) => Promise<ColourOption[]>,
}

export interface ColourOption {
   value: string;
   label: string;
   color: string;
   isFixed?: boolean;
   isDisabled?: boolean;
}

export const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const billed: Billed = {
  billedFrom: "Hospital test",
  billedTo: "Emmnual Afolabi",
};

export const service: service = {
  serviceProviderPlace: "Hospital Test",
  serviceProviderLocation: "Lekki, Lagos Nigeria",
  serviceProviderNumber: "08132556677",
  patientDetails: "Emmanuel Afolabi",
  patientDetailsNumber: "08132556677",
};
