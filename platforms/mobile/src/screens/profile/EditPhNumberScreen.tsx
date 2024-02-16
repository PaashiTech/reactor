import {
  Text,
  View,
  MobileNumberInput,
  UnmzGradientButton,
} from "@unmaze/views";
import { FC, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import {
  ProfileScreen,
  EditPhNumberScreenProps,
  EDIT_PH_NUMBER_SCREEN_ID,
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
} from "./types";

const _EditPhNumberScreen: FC<EditPhNumberScreenProps> = ({
  navigation,
  route,
}) => {
  const [mobileNumber, setMobileNumber] = useState<string>("");

  const isButtonDisabled = mobileNumber.length < 10;

  const handleMobileNumberChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setMobileNumber(e.nativeEvent.text);
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
            Edit your mobile number
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
        <MobileNumberInput
          mobileNumberValue={mobileNumber}
          handleMobileNumberChange={handleMobileNumberChange}
        />
      </View>
      <UnmzGradientButton
        disabled={isButtonDisabled}
        onPress={() => {
          navigation.replace(OTP_VERIFICATION_SCREEN_ID, {
            confirmScreenId: VERIFICATION_SUCCESS_SCREEN_ID,
            sentToType: "number",
            sentToValue: `+91-${mobileNumber}`,
          });
        }}
      >
        Confirm
      </UnmzGradientButton>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const EditPhNumberScreen: ProfileScreen = {
  key: EDIT_PH_NUMBER_SCREEN_ID,
  title: "Edit number",
  background: "plain",
  content: _EditPhNumberScreen,
};
