import {
  UnmzGradientButton,
  OTPCountdownTimer,
  Spinner,
  Text,
  View,
  XStack,
  UnmzToast,
  OTPInput,
  useUserStore,
} from "@unmaze/views";
import { CheckGreen } from "@unmaze/assets";
import { FC, useEffect, useState } from "react";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import { ToastViewport } from "@tamagui/toast";
import {
  OTPAccountVerificationScreenProps,
  OTP_ACCOUNT_VERIFICATION_SCREEN_ID,
} from "./types";
import {
  OTPSentToType,
  useVerificationContext,
} from "./VerificationContextProvider";
import { UnmzNavScreen } from "../types";
import { useGetOTP, useValidateOTP } from "@unmaze/api";
import { TEST_EMAIL_ID } from "./testCredentials";

const _OTPAccountVerificationScreen: FC<OTPAccountVerificationScreenProps> = ({
  navigation,
  route,
}) => {
  const [OTPInputText, setOTPInputText] = useState<string>("");
  const user_id = useUserStore((state) => state.user_id);
  const { getOTP, getOTPData } = useGetOTP();
  const {
    validateOTP,
    validateOTPError,
    validateOTPStatus,
    validateOTPIsLoading,
  } = useValidateOTP();

  const { OTPSentTo } = useVerificationContext();

  const { confirmScreenId } = route.params;
  const validateOTPSuccessfull = validateOTPStatus === 200;

  const buttonDisabled = OTPInputText.length < 6 || validateOTPIsLoading;

  useEffect(() => {
    getOTP(
      {},
      {
        user_id: user_id,
        email: TEST_EMAIL_ID,
        // phone: TEST_PHONE,
      }
    );
  }, []);

  const handleValidateOTP = () => {
    if (validateOTPSuccessfull) {
      navigation.replace(confirmScreenId);
    } else {
      if (getOTPData) {
        validateOTP(
          {},
          {
            otp: Number(OTPInputText),
            session_id: getOTPData.session_id ? getOTPData.session_id : "",
          }
        );
      } else {
        console.log("OTP Data: " + getOTPData);
      }
    }
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
              Enter the OTP sent to your{" "}
              {OTPSentTo.type === OTPSentToType.EMAIL ? "email" : "number"}
            </Text>
            <Text fontSize={14} fontWeight={"500"}>
              {OTPSentTo.value}
            </Text>
          </View>
        </View>
        <View gap={20}>
          {!validateOTPIsLoading && !validateOTPSuccessfull ? (
            <OTPInput
              code={OTPInputText}
              setCode={(value) => setOTPInputText(value)}
              isError={!!validateOTPError}
            />
          ) : validateOTPIsLoading ? (
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
          {!validateOTPSuccessfull ? (
            <XStack gap={4}>
              <Text color={"#6F6F6F"}>Didn't receive the OTP?</Text>
              <OTPCountdownTimer
                timerSeconds={60}
                onResendPress={() => {
                  getOTP(
                    {},
                    {
                      user_id: user_id,
                      email: TEST_EMAIL_ID,
                      // phone: TEST_PHONE,
                    }
                  );
                }}
              />
            </XStack>
          ) : (
            <Text color={"#6F6F6F"}>Account verifed successfully</Text>
          )}
        </View>
      </View>
      <View>
        <UnmzToast />
        <ToastViewport left={0} right={0} bottom={50} />
        <UnmzGradientButton
          disabled={buttonDisabled}
          onPress={handleValidateOTP}
        >
          Confirm
        </UnmzGradientButton>
      </View>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const OTPAccountVerificationScreen: UnmzNavScreen = {
  key: OTP_ACCOUNT_VERIFICATION_SCREEN_ID,
  title: "Verify your account",
  content: _OTPAccountVerificationScreen,
};
