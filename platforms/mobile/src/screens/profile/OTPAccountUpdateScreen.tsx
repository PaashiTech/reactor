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
  OTPAccountUpdateScreenProps,
  OTP_ACCOUNT_UPDATE_SCREEN_ID,
} from "../shared/types";
import {
  OTPSentToType,
  useVerificationContext,
} from "../shared/VerificationContextProvider";
import { UnmzNavScreen } from "../types";
import {
  useGetOTP,
  useValidateOTP,
  useUpdateUser,
  useGetUser,
} from "@unmaze/api";
import { TEST_EMAIL_ID } from "../shared/testCredentials";

const _OTPAccountUpdateScreen: FC<OTPAccountUpdateScreenProps> = ({
  navigation,
  route,
}) => {
  const [OTPInputText, setOTPInputText] = useState<string>("");
  const user_id = useUserStore((state) => state.user_id);
  const currentPrimaryNumber = useUserStore((state) => state.phone.primary);
  const { getOTP, getOTPData } = useGetOTP();
  const { updateUser, updateUserIsLoading, updateUserError, updateUserStatus } =
    useUpdateUser({ id: user_id });
  const { userMutate } = useGetUser({ id: user_id });
  const { OTPSentTo } = useVerificationContext();

  const { confirmScreenId } = route.params;
  const updateUserSuccessfull = updateUserStatus === 200;
  const buttonDisabled = OTPInputText.length < 6 || updateUserIsLoading;

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
    if (updateUserSuccessfull) {
      userMutate();
      navigation.replace(confirmScreenId);
    } else {
      if (getOTPData) {
        let fieldToBeUpdated: any | null = null;
        if (OTPSentTo.type === OTPSentToType.EMAIL) {
          fieldToBeUpdated = { email: OTPSentTo.value };
        } else if (OTPSentTo.type === OTPSentToType.PRIMARY_NUMBER) {
          fieldToBeUpdated = { phone: { primary: OTPSentTo.value } };
        } else if (OTPSentTo.type === OTPSentToType.SECONDARY_NUMBER) {
          fieldToBeUpdated = {
            phone: {
              primary: currentPrimaryNumber,
              secondary: OTPSentTo.value,
            },
          };
        }
        // Sends the user details to be updated
        updateUser(
          {},
          {
            otp: Number(OTPInputText),
            session_id: getOTPData.session_id ? getOTPData.session_id : "",
            ...fieldToBeUpdated,
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
              Enter the OTP sent to your {OTPSentTo.type}
            </Text>
            <Text fontSize={14} fontWeight={"500"}>
              {OTPSentTo.value}
            </Text>
          </View>
        </View>
        <View gap={20}>
          {!updateUserIsLoading && !updateUserSuccessfull ? (
            <OTPInput
              code={OTPInputText}
              setCode={(value) => setOTPInputText(value)}
              isError={!!updateUserError}
            />
          ) : updateUserIsLoading ? (
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
          {!updateUserSuccessfull ? (
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
            <Text color={"#6F6F6F"}>Account updated successfully</Text>
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

export const OTPAccountUpdateScreen: UnmzNavScreen = {
  key: OTP_ACCOUNT_UPDATE_SCREEN_ID,
  title: "Update your account",
  content: _OTPAccountUpdateScreen,
};
