import {
  Text,
  View,
  MobileNumberInput,
  UnmzGradientButton,
} from "@unmaze/views";
import { FC } from "react";

import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import {
  ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID,
  AddSecondaryPhoneNumberScreenProps,
} from "./types";
import {
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
} from "../shared";
import { useForm } from "react-hook-form";
import { useVerificationContext } from "../shared/VerificationContextProvider";
import { UnmzNavScreen } from "../types";

const _AddSecondaryPhoneNumberScreen: FC<
  AddSecondaryPhoneNumberScreenProps
> = ({ navigation, route }) => {
  const { phoneType, setVerifiedMessage, setOTPSentTo, setPhoneType } =
    useVerificationContext();

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm();

  const handleConfirm = (data) => {
    // Handle the store action over here with data
    setVerifiedMessage(
      `You have successfully added your secondary mobile number`
    );
    setOTPSentTo({
      type: `${phoneType} number`,
      value: data.mobileNumber,
    });
    navigation.replace(OTP_VERIFICATION_SCREEN_ID, {
      confirmScreenId: VERIFICATION_SUCCESS_SCREEN_ID,
    });
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
          <Text
            fontSize={"$4"}
            fontWeight={"600"}
            letterSpacing={0.32}
            color={"#262626"}
          >
            Add your secondary number
          </Text>
          <Text
            fontWeight={"$4"}
            fontSize={14}
            lineHeight={18}
            letterSpacing={0.28}
            color={"#6F6F6F"}
          >
            Enter your mobile number. We'll send you a confirmation code there
          </Text>
        </View>
        <MobileNumberInput control={control} name="mobileNumber" />
      </View>
      <UnmzGradientButton
        disabled={!isValid}
        onPress={handleSubmit(handleConfirm)}
      >
        Confirm
      </UnmzGradientButton>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const AddSecondaryPhoneNumberScreen: UnmzNavScreen = {
  key: ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID,
  title: "Add number",
  content: _AddSecondaryPhoneNumberScreen,
};