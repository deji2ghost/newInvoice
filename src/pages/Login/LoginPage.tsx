import { useState } from "react";
import CustomInput from "../../components/ui/customInput";
import CustomButton from "../../components/ui/customButton";
import CustomLabel from "../../components/ui/customLabel";
import FormHeader from "../../components/layout/FormHeader/formHeader";
import FormFooter from "../../components/layout/FormFooter/formFooter";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative min-h-screen bg-greyFragments-#FAFAFA p-[32px] md:px-[146px] md:py-[226px] lg:px-[482px] lg:py-[206px]">
      <div className="p-0 md:absolute md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-10 md:bg-white md:p-10 md:w-[476px] md:mx-auto md:h-[482px] md:my-auto md:rounded-xl">
        <FormHeader heading="Login" paragraph="Add your details below to get back into the app" />
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
            <CustomLabel label="Password" />
            <CustomInput
              width="w-full"
              type={"password"}
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <CustomButton children="Login" size="lg" />
          <FormFooter heading="Don’t have an account?" paragraph="Create account" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
