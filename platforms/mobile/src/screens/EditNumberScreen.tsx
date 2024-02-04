import { MobileNumberInput, UnmzGradientButton } from "@unmaze/views";
import { useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Text, View } from "tamagui";

const EditNumberScreen = () => {
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
          <Text fontWeight={"600"} fontSize={16} color={"#262626"}>
            Edit your mobile number
          </Text>
          <Text
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
      <UnmzGradientButton disabled={isButtonDisabled}>
        Confirm
      </UnmzGradientButton>
    </View>
  );
};

export default EditNumberScreen;
