import {
  View,
  MobileNumberInput,
  UnmzGradientButton,
  HeadingText,
  BodyText,
} from "@unmaze/views";
import { FC } from "react";

import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import {
  ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID,
  AddSecondaryPhoneNumberScreenProps,
} from "./types";
import {
  OTP_ACCOUNT_UPDATE_SCREEN_ID,
  ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
} from "../shared";
import { useForm } from "react-hook-form";
import { UnmzNavScreen } from "../types";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { OTPSentToType } from "../../navigation/navigators/stackContext/utility.types";

const _AddSecondaryPhoneNumberScreen: FC<
  AddSecondaryPhoneNumberScreenProps
> = ({ navigation, route }) => {
  const { dispatch } = useStackContext();

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm();

  const handleConfirm = (data) => {
    // Handle the action over here with data

    dispatch({
      type: "SET_VERIFIED_MESSAGE",
      payload: `You have successfully added your secondary mobile number`,
    });
    dispatch({
      type: "SET_OTP_SENT_TO",
      payload: {
        type: OTPSentToType.SECONDARY_NUMBER,
        value: data.mobileNumber,
      },
    });
    navigation.replace(OTP_ACCOUNT_UPDATE_SCREEN_ID, {
      confirmScreenId: ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
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
          <HeadingText size="lg">Add your secondary number</HeadingText>
          <BodyText color="#6F6F6F">
            Enter your mobile number. We'll send you a confirmation code there
          </BodyText>
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
