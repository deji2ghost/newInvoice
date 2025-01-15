import { formFooterProps } from "./footerTypes";

const FormFooter = ({ heading, paragraph }: formFooterProps) => {
  return (
    <div className="md:flex gap-[1px] justify-center text-center">
      <p className="text-[16px] font-normal text-greyFragments-#737373">
        { heading }
      </p>
      <p className="text-[16px] font-normal text-purpleFragments-#633CFF">
        { paragraph }
      </p>
    </div>
  );
};

export default FormFooter;
