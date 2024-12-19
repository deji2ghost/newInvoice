import { useState } from "react";
import FormHeader from "../../components/layout/FormHeader/formHeader";
import CustomButton from "../../components/ui/customButton";
import CustomInput from "../../components/ui/customInput";
import FormFooter from "../../components/layout/FormFooter/formFooter";

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
            <CustomInput
              width="w-full"
              id="email"
              labelText="Email Address"
              type="text"
              placeholder="Write Your Email Here"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col gap-1">
            <CustomInput
            labelText="Create password"
            id="create password"
              width="w-full"
              type={"password"}
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="flex flex-col gap-1">
            <CustomInput
            labelText="Create password"
            id="create password"
              width="w-full"
              type={"password"}
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
          <div className="">
            <CustomInput
            labelText="Choose a file"
            id="file"
              width="w-full"
              type={"file"}
              placeholder="file"
            />
          </div>
          <CustomButton children="Login" size="lg" className="w-full" />
          <FormFooter heading="Already have an account?" paragraph="Login" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
