import { Text, View, Input, UnmzGradientButton } from "@unmaze/views";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import {
  Screen,
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
  EditEmailScreenProps,
} from "../types";

const _EditEmailScreen: React.FC<EditEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
  const [isSubmittedOnce, setIsSubmittedOnce] = useState<boolean>(false);

  const buttonDisabled =
    (isSubmittedOnce && isEmailInvalid) || email.length === 0;

  const handleEmailChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    validateEmail(e.nativeEvent.text);
    setEmail(e.nativeEvent.text);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  };

  const handleEmailSubmit = () => {
    if (!isSubmittedOnce) {
      setIsSubmittedOnce(true);
    }
    if (isEmailInvalid) return;
    navigation.replace(OTP_VERIFICATION_SCREEN_ID, {
      confirmScreenId: VERIFICATION_SUCCESS_SCREEN_ID,
      sentToType: "email",
      sentToValue: email,
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
        <View gap={8}>
          <Text color="#444444">Email Address</Text>
          <Input
            autoFocus
            unstyled
            paddingHorizontal={4}
            paddingBottom={10}
            placeholder="eg. youremail@gmail.com"
            value={email}
            onChange={handleEmailChange}
            borderBottomWidth={2}
            fontSize={16}
            fontWeight={"500"}
            fontFamily={"$body"}
            placeholderTextColor="$placeholderColor"
            borderBottomColor={
              isEmailInvalid && isSubmittedOnce ? "#DA1E28" : "#212121"
            }
            cursorColor={"#212121"}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onBlur={() => validateEmail(email)}
          />
          {isEmailInvalid && isSubmittedOnce && (
            <Text color="#DA1E28">Please enter valid email address</Text>
          )}
        </View>
      </View>
      <UnmzGradientButton disabled={buttonDisabled} onPress={handleEmailSubmit}>
        Confirm
      </UnmzGradientButton>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const EditEmailScreen: Screen = {
  key: EDIT_EMAIL_SCREEN_ID,
  title: "Edit email address",
  background: "plain",
  content: _EditEmailScreen,
};
