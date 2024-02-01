import { UnmzGradientButton, OTPInput } from "@unmaze/views";
import { useState } from "react";
import { Text, View } from "tamagui";

const OtpScreen = () => {
  const [OTPInputText, setOTPInputText] = useState<string>("");

  const buttonDisabled = OTPInputText.length < 6;

  return (
    <View
      flex={1}
      paddingHorizontal={20}
      paddingBottom={20}
      justifyContent="space-between"
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
        <OTPInput handleTextChange={setOTPInputText} />
      </View>
      <UnmzGradientButton disabled={buttonDisabled}>Confirm</UnmzGradientButton>
    </View>
  );
};

export default OtpScreen;
