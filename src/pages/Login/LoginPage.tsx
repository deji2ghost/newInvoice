import { useState } from "react";
import CustomInput from "../../components/ui/customInput";
import CustomButton from "../../components/ui/customButton";

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
    <div>
      <CustomInput
        width="w-[13%]"
        type="text"
        placeholder="Write Your Email Here"
        value={email}
        onChange={handleEmail}
      />
      <CustomInput
        width="w-[13%]"
        type={"password"}
        placeholder="Write Your PassWord Here"
        value={password}
        onChange={handlePassword}
      />
      <CustomButton children={"Login"} className={"w-[13%]"} />
    </div>
  );
};

export default LoginPage;
