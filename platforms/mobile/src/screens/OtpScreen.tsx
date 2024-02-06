import { UnmzGradientButton, OTPInput, CountdownTimer } from "@unmaze/views";
import { CheckGreen } from "@unmaze/assets";
import OTPTextView from "@unmaze/views/src/components/OTPInput/OTPTextView";
import { useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Spinner, Text, View, XStack } from "tamagui";

const CORRECT_OTP = "123456";

const OtpScreen = () => {
  const [OTPInputText, setOTPInputText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const otpRef = useRef<OTPTextView>(null);

  const buttonDisabled = OTPInputText.length < 6 || isSubmitting;
  const isError = error && !OTPInputText;

  const clearOTP = () => {
    if (otpRef.current) {
      otpRef.current.clear();
    }
  };

  const verifyOTP = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      if (OTPInputText === CORRECT_OTP) {
        setIsSuccess(true);
        setError(false);
      } else {
        setError(true);
      }
      clearOTP();
      setOTPInputText("");
      setIsSubmitting(false);
    }, 3000);
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
        <View gap={20}>
          {!isSubmitting && !isSuccess ? (
            <OTPInput
              otpRef={otpRef}
              isError={isError}
              handleTextChange={setOTPInputText}
            />
          ) : !isSuccess ? (
            <Spinner
              alignSelf="flex-start"
              size="large"
              color={"#D9D9D9"}
              style={{ transform: [{ scaleX: 1.11 }, { scaleY: 1.11 }] }}
            />
          ) : (
            <CheckGreen />
          )}
          {!isSuccess ? (
            <XStack gap={4}>
              <Text color={"#6F6F6F"}>Didn't receive the OTP?</Text>
              <CountdownTimer timerSeconds={60} />
            </XStack>
          ) : (
            <Text color={"#6F6F6F"}>Account verifed successfully</Text>
          )}
        </View>
      </View>
      <UnmzGradientButton disabled={buttonDisabled} onPress={verifyOTP}>
        Confirm
      </UnmzGradientButton>
    </View>
  );
};

export default OtpScreen;
