import { Input, Text, View, XStack } from "tamagui";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type MobileNumberInputProps = {
  mobileNumberValue: string;
  handleMobileNumberChange: (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => void;
};

export const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  mobileNumberValue,
  handleMobileNumberChange,
}) => {
  return (
    <View>
      <Text color="#525252" fontSize={14} fontWeight={"400"}>
        Mobile Number
      </Text>
      <XStack gap={8}>
        <Input
          unstyled
          cursorColor={"#212121"}
          color={"#212121"}
          defaultValue="+91"
          fontSize={14}
          fontWeight={"500"}
          fontFamily={"$body"}
          padding={4}
          borderBottomWidth={2}
          borderBottomColor={"#b0b0b0"}
          disabled
        />
        <Input
          unstyled
          maxLength={10}
          value={mobileNumberValue}
          onChange={handleMobileNumberChange}
          borderBottomWidth={1}
          fontSize={14}
          fontWeight={"500"}
          fontFamily={"$body"}
          borderBottomColor={"#6F6F6F"}
          focusStyle={{
            borderBottomColor: "#262626",
          }}
          flex={1}
          keyboardType="numeric"
        />
      </XStack>
    </View>
  );
};
