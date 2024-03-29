import {
  UnmzGradientButton,
  OTPCountdownTimer,
  Spinner,
  View,
  XStack,
  UnmzToast,
  OTPInput,
  useUserStore,
  HeadingText,
  BodyText,
  AccentText,
} from "@unmaze/views";
import { CheckGreen } from "@unmaze/assets";
import { FC, useEffect, useState } from "react";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import { ToastViewport } from "@tamagui/toast";
import { UnmzNavScreen } from "../types";
import { useGetOTP, useValidateOTP } from "@unmaze/api";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { TEST_EMAIL_ID } from "../shared/testCredentials";
import {
  OTPFamilyMemberScreenProps,
  OTP_FAMILY_MEMBER_SCREEN_ID,
} from "./types";

const _OTPFamilyMemberScreen: FC<OTPFamilyMemberScreenProps> = ({
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

  const {
    state: {
      shared: { OTPSentTo },
    },
  } = useStackContext();

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
          <HeadingText size="lg" color="#161616">
            Member Verification
          </HeadingText>
          <View>
            <BodyText color="#6F6F6F">
              Enter the OTP sent to your family member received on
            </BodyText>
            <AccentText color="#161616">{OTPSentTo.value}</AccentText>
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
              <BodyText color="#6F6F6F">Didn't receive the OTP?</BodyText>
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
            <BodyText color="#6F6F6F">Account verifed successfully</BodyText>
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

export const OTPFamilyMemberScreen: UnmzNavScreen = {
  key: OTP_FAMILY_MEMBER_SCREEN_ID,
  title: "Verify OTP",
  content: _OTPFamilyMemberScreen,
};
