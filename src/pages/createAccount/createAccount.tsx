import { useState } from "react";
import FormHeader from "../../components/FormHeader/formHeader";
import CustomButton from "../../components/ui/customButton";
import CustomInput from "../../components/ui/customInput";
import CustomLabel from "../../components/ui/customLabel";
import FormFooter from "../../components/FormFooter/formFooter";

const CreateAccount = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="relative min-h-screen bg-greyFragments-#FAFAFA p-[32px] md:px-[146px] md:py-[158px] lg:px-[482px] lg:py-[138px] overflow-hidden">
      <div className="md:absolute md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-10 md:bg-white md:p-10 md:w-[476px] md:mx-auto md:h-[618px] md:my-auto md:rounded-xl">
        <FormHeader
          heading="Create account"
          paragraph="Let's get you started"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <CustomLabel label="Email Address" />
            <CustomInput
              width="w-full"
              type="text"
              placeholder="Write Your Email Here"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col gap-1">
            <CustomLabel label="Create password" />
            <CustomInput
              width="w-full"
              type={"password"}
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="flex flex-col gap-1">
            <CustomLabel label="Confirm password" />
            <CustomInput
              width="w-full"
              type={"password"}
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
          <CustomButton children="Login" size="lg" />
          <FormFooter heading="Already have an account?" paragraph="Login" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
