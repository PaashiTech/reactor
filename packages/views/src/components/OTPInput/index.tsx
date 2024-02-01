/**
 * @name OTPInput
 *
 * @description
 * Input component to enter the OTP
 */

import OTPTextView from "react-native-otp-textinput";

type OTPInputProps = {
  handleTextChange: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput: React.FC<OTPInputProps> = ({ handleTextChange}) => {
  return (
    <OTPTextView
      handleTextChange={handleTextChange}
      inputCount={6}
      tintColor={"#FDDC69"}
      offTintColor={"#E5E0DF"}
      textInputStyle={{
        width: 40,
        borderBottomWidth: 2,
        color: "#262626",
      }}
    />
  );
};

export default OTPInput;
