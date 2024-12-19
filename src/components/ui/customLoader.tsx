import { ColorRing } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="40"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#BEADFF", "#BEADFF", "#BEADFF", "#BEADFF", "#BEADFF"]}
    />
  );
};

export default CustomLoader;
