import { formHeaderProps } from "./formTypes";

const FormHeader = ({ heading, paragraph }: formHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[32px] font-bold text-greyFragments-#333333">
        {heading}
      </h1>
      <p className="text-[16px] font-normal text-greyFragments-#737373">
        {paragraph}
      </p>
    </div>
  );
};

export default FormHeader;
