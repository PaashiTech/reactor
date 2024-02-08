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

  const isButtonDisabled = false;

  const handleEmailChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setEmail(e.nativeEvent.text);
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
            borderBottomColor={"#212121"}
            cursorColor={"#212121"}
          />
        </View>
      </View>
      <UnmzGradientButton
        disabled={isButtonDisabled}
        onPress={() => {
          navigation.replace(OTP_VERIFICATION_SCREEN_ID, {
            confirmScreenId: VERIFICATION_SUCCESS_SCREEN_ID,
            sentToType: "email",
            sentToValue: email,
          });
        }}
      >
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
