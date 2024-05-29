import {
  View,
  UnmzGradientButton,
  FormTextInput,
  BodyText,
  HeadingText,
} from "@unmaze/views";

import KeyboardAvoidingViewWithDismiss from "../../components/shared/KeyboardAvoidingViewWithDismiss";
import { EditEmailScreenProps, EDIT_EMAIL_SCREEN_ID } from "./types";
import {
  OTP_ACCOUNT_UPDATE_SCREEN_ID,
  ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
} from "../shared";

import { useForm } from "react-hook-form";
import { UnmzNavScreen } from "../types";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { OTPSentToType } from "../../navigation/navigators/stackContext/utility.types";

const _EditEmailScreen: React.FC<EditEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const { dispatch } = useStackContext();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const buttonDisabled = !isValid;

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailSubmit = (data) => {
    dispatch({
      type: "SET_VERIFIED_MESSAGE",
      payload: `You have successfully updated your email address`,
    });
    dispatch({
      type: "SET_OTP_SENT_TO",
      payload: {
        type: OTPSentToType.EMAIL,
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
          <HeadingText>Edit your email address</HeadingText>
          <BodyText color={"#6F6F6F"}>
            Enter your email address. We'll send you a confirmation code there
          </BodyText>
        </View>
        <FormTextInput
          label="Email Address"
          name="email"
          control={control}
          placeholder="eg. youremail@gmail.com"
          rules={{
            required: {
              value: true,
              message: `Email is required`,
            },
            pattern: EMAIL_REGEX,
          }}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
        />
      </View>
      <UnmzGradientButton
        disabled={buttonDisabled}
        onPress={handleSubmit(handleEmailSubmit)}
      >
        Confirm
      </UnmzGradientButton>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const EditEmailScreen: UnmzNavScreen = {
  key: EDIT_EMAIL_SCREEN_ID,
  title: "Edit email address",
  content: _EditEmailScreen,
};
