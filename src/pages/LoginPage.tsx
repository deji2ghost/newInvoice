import { useState } from "react";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
        label="Email"
        placeholder="Write Your Email Here"
        value={email}
        handleChange={handleEmail}
      />
      <CustomInput
        width="w-[13%]"
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        label="PassWord"
        placeholder="Write Your PassWord Here"
        value={password}
        handleChange={handlePassword}
      />
      <CustomButton text={"Login"} width={"w-[13%]"} />
    </div>
  );
};

export default LoginPage;
