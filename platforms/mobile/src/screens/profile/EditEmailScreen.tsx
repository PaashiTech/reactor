import { Text, View, UnmzGradientButton } from "@unmaze/views";

import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import {
  ProfileScreen,
  EditEmailScreenProps,
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
} from "./types";
import { EmailInput } from "../../components/EmailInput";
import { useForm } from "react-hook-form";

const _EditEmailScreen: React.FC<EditEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const buttonDisabled = !isValid;

  const handleEmailSubmit = (data) => {
    navigation.replace(OTP_VERIFICATION_SCREEN_ID, {
      confirmScreenId: VERIFICATION_SUCCESS_SCREEN_ID,
      sentToType: "email",
      sentToValue: data.email,
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
            Edit your email address
          </Text>
          <Text
            fontWeight={"$4"}
            fontSize={14}
            lineHeight={18}
            letterSpacing={0.28}
            color={"#6F6F6F"}
          >
            Enter your email address. We'll send you a confirmation code there
          </Text>
        </View>
        <EmailInput control={control} name="email" />
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

export const EditEmailScreen: ProfileScreen = {
  key: EDIT_EMAIL_SCREEN_ID,
  title: "Edit email address",
  headerBackground: "plain",
  content: _EditEmailScreen,
};
