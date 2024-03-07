import {
  UnmzGradientButton,
  OTPInput,
  OTPCountdownTimer,
  Spinner,
  Text,
  View,
  XStack,
  UnmzToast,
  OTPInputNew,
} from "@unmaze/views";
import { CheckGreen } from "@unmaze/assets";
import { FC, useState } from "react";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import { ToastViewport } from "@tamagui/toast";
import {
  OTPVerificationScreenProps,
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
} from "./types";
import { useVerificationContext } from "./VerificationContextProvider";
import { UnmzNavScreen } from "../types";

const CORRECT_OTP = "123456";

const _OTPVerificationScreen: FC<OTPVerificationScreenProps> = ({
  navigation,
  route,
}) => {
  const [OTPInputText, setOTPInputText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { OTPSentTo } = useVerificationContext();
  const { confirmScreenId } = route.params;

  const buttonDisabled = OTPInputText.length < 6 || isSubmitting;

  const verifyOTP = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      if (OTPInputText === CORRECT_OTP) {
        setIsSuccess(true);
        setError(false);
        if (confirmScreenId === VERIFICATION_SUCCESS_SCREEN_ID) {
          navigation.replace(confirmScreenId);
        } else {
          setTimeout(() => {
            navigation.replace(confirmScreenId);
          }, 2000);
        }
      } else {
        setError(true);
      }
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingViewWithDismiss
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: "space-between",
      }}
    >
      <View paddingTop={40} gap={40}>
        <View gap={12}>
          <Text fontWeight={"$6"} fontSize={16} color={"#262626"}>
            Account verfication code
          </Text>
          <View>
            <Text fontSize={14} color={"#6F6F6F"}>
              Enter the OTP sent to your {OTPSentTo.type}
            </Text>
            <Text fontSize={14} fontWeight={"500"}>
              {OTPSentTo.value}
            </Text>
          </View>
        </View>
        <View gap={20}>
          {!isSubmitting && !isSuccess ? (
            <OTPInputNew
              code={OTPInputText}
              setCode={(value) => setOTPInputText(value)}
              isError={error}
            />
          ) : !isSuccess ? (
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
          )}
          {!isSuccess ? (
            <XStack gap={4}>
              <Text color={"#6F6F6F"}>Didn't receive the OTP?</Text>
              <OTPCountdownTimer timerSeconds={60} />
            </XStack>
          ) : (
            <Text color={"#6F6F6F"}>Account verifed successfully</Text>
          )}
        </View>
      </View>
      <View>
        <UnmzToast />
        <ToastViewport left={0} right={0} bottom={50} />
        <UnmzGradientButton disabled={buttonDisabled} onPress={verifyOTP}>
          Confirm
        </UnmzGradientButton>
      </View>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const OTPVerificationScreen: UnmzNavScreen = {
  key: OTP_VERIFICATION_SCREEN_ID,
  title: "Verify your account",
  content: _OTPVerificationScreen,
};
