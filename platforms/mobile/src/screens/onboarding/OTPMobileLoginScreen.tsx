import {
  AccentText,
  BodyText,
  HeadingText,
  OTPCountdownTimer,
  OTPInput,
  Spinner,
  ToastViewport,
  UnmzGradientButton,
  UnmzToast,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  OTPMobileLoginScreenprops,
  OTP_MOBILE_LOGIN_SCREEN_ID,
  PIN_SETUP_SCREEN_ID,
  SSO_SCREEN_ID,
} from "./types";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import { CheckGreen } from "@unmaze/assets";
import { useState } from "react";

const _OTPMobileLoginScreen: React.FC<OTPMobileLoginScreenprops> = ({
  navigation,
  route,
}) => {
  const [OTPInputText, setOTPInputText] = useState<string>("");

  const mobileNumber = route.params.mobileNumber;
  const buttonDisabled = OTPInputText.length !== 6;

  const handleConfirm = () => {
    // API Call for OTP Verify;
    // Navigate to Pin Setup after success;
    navigation.navigate(PIN_SETUP_SCREEN_ID);
  };

  return (
    <KeyboardAvoidingViewWithDismiss
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: "space-between",
        backgroundColor: "#FFF",
      }}
    >
      <View paddingTop={40} gap={40}>
        <View gap={12}>
          <HeadingText size="lg">Verify your number with OTP</HeadingText>

          <YStack gap={2}>
            <BodyText color="#6F6F6F">
              Enter the OTP sent to your number
            </BodyText>
            <AccentText>+91-{mobileNumber}</AccentText>
          </YStack>
        </View>
        <View gap={20}>
          {/* {!updateUserIsLoading && !updateUserSuccessfull ? ( */}
          <OTPInput
            code={OTPInputText}
            setCode={(value) => setOTPInputText(value)}
            isError={false}
          />
          {/* ) : updateUserIsLoading ? (
              <View height={40} justifyContent="center">
                <Spinner
                  alignSelf="flex-start"
                  size="large"
                  color={"#D9D9D9"}
                  style={{ transform: [{ scaleX: 1.11 }, { scaleY: 1.11 }] }}
                />
              </View>
            ) : (
              <View height={60} justifyContent="center">
                <CheckGreen />
              </View>
            )} */}
          {/* {!updateUserSuccessfull ? ( */}
          <XStack gap={4}>
            <BodyText color="#6F6F6F">Didn't receive the OTP?</BodyText>
            <OTPCountdownTimer timerSeconds={60} onResendPress={() => {}} />
          </XStack>
          {/* ) : (
               <BodyText color="#6F6F6F">Password updated successfully</BodyText>
            )} */}
        </View>
      </View>
      <View>
        <UnmzToast />
        <ToastViewport left={0} right={0} bottom={50} />
        <UnmzGradientButton disabled={buttonDisabled} onPress={handleConfirm}>
          Confirm
        </UnmzGradientButton>
      </View>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const OTPMobileLoginScreen: UnmzNavScreen = {
  key: OTP_MOBILE_LOGIN_SCREEN_ID,
  title: "",
  content: _OTPMobileLoginScreen,
};
