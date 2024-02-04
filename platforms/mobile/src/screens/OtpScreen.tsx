import { UnmzGradientButton, OTPInput } from "@unmaze/views";
import OTPTextView from "@unmaze/views/src/components/OTPInput/OTPTextView";
import { useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Text, View } from "tamagui";

const CORRECT_OTP = "123456";

const OtpScreen = () => {
  const [OTPInputText, setOTPInputText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const otpRef = useRef<OTPTextView>(null);

  const buttonDisabled = OTPInputText.length < 6;

  const isError = error && !OTPInputText;

  const clearOTP = () => {
    if (otpRef.current) {
      otpRef.current.clear();
    }
  };

  const verifyOTP = () => {
    if (OTPInputText === CORRECT_OTP) {
      alert("Account Verified");
      setError(false);
    } else {
      setError(true);
    }
    clearOTP();
  };

  return (
    <View
      flex={1}
      paddingHorizontal={20}
      paddingBottom={20}
      justifyContent="space-between"
      onPress={Keyboard.dismiss}
    >
      <View paddingTop={40} gap={40}>
        <View gap={12}>
          <Text fontWeight={"$6"} fontSize={16} color={"#262626"}>
            Account verfication code
          </Text>
          <View>
            <Text fontSize={14} color={"#6F6F6F"}>
              Enter the OTP sent to your email
            </Text>
            <Text fontSize={14} fontWeight={"500"}>
              piyushsarda24@gmail.com
            </Text>
          </View>
        </View>
        <OTPInput
          otpRef={otpRef}
          isError={isError}
          handleTextChange={setOTPInputText}
        />
      </View>
      <UnmzGradientButton disabled={buttonDisabled} onPress={verifyOTP}>
        Confirm
      </UnmzGradientButton>
    </View>
  );
};

export default OtpScreen;
