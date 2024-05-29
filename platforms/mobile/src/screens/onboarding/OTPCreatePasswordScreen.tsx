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
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  EMAIL_LOGIN_SCREEN_ID,
  OTPCreatePasswordScreenProps,
  OTP_CREATE_PASSWORD_SCREEN_ID,
  SSO_SCREEN_ID,
} from "./types";
import KeyboardAvoidingViewWithDismiss from "../../components/shared/KeyboardAvoidingViewWithDismiss";
import { CheckGreen } from "@unmaze/assets";
import { useState } from "react";

const _OTPCreatePasswordScreen: React.FC<OTPCreatePasswordScreenProps> = ({
  navigation,
  route,
}) => {
  const [OTPInputText, setOTPInputText] = useState<string>("");

  const handleSetPassword = () => {
    // API Call for setting password;

    // Navigate to SSO screen after success;

    navigation.navigate(SSO_SCREEN_ID);
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
          <HeadingText size="lg">Verify your email</HeadingText>
          <View>
            <BodyText color="#6F6F6F">
              Enter the OTP sent to your registered email address
            </BodyText>
          </View>
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
        <UnmzGradientButton
          // disabled={buttonDisabled}
          onPress={handleSetPassword}
        >
          Set Password
        </UnmzGradientButton>
      </View>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const OTPCreatePasswordScreen: UnmzNavScreen = {
  key: OTP_CREATE_PASSWORD_SCREEN_ID,
  title: "Set Password",
  content: _OTPCreatePasswordScreen,
};
