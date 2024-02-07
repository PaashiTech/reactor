import { MobileNumberInput, UnmzGradientButton } from "@unmaze/views";
import { FC, useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Text, View } from "tamagui";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UnmzStackNavRouteProps, Screen } from "../types";

const _EditPhNumberScreen: FC<
  NativeStackScreenProps<UnmzStackNavRouteProps, "0012.f.1">
> = ({ navigation, route }) => {
  const [mobileNumber, setMobileNumber] = useState<string>("");

  const isButtonDisabled = mobileNumber.length < 10;

  const handleMobileNumberChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setMobileNumber(e.nativeEvent.text);
  };

  return (
    <View
      flex={1}
      paddingHorizontal={20}
      paddingBottom={20}
      justifyContent="space-between"
      onPress={Keyboard.dismiss}
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
          navigation.replace("0012.b.1", {});
        }}
      >
        Confirm
      </UnmzGradientButton>
    </View>
  );
};

export const EditPhNumberScreen: Screen = {
  key: "0012.f.1",
  title: "Edit number",
  background: "plain",
  content: _EditPhNumberScreen,
};
