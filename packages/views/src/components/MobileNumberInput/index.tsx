import { Input, Text, View, XStack } from "tamagui";

type MobileNumberInputProps = {
  mobileNumberValue: string;
  handleMobileNumberChange: () => void;
};

export const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  mobileNumberValue,
  handleMobileNumberChange,
}) => {
  return (
    <View gap={8}>
      <Text color="#444444">Mobile Number</Text>
      <XStack gap={8}>
        <Input
          unstyled
          cursorColor={"#212121"}
          color={"#212121"}
          defaultValue="+91"
          fontSize={16}
          fontWeight={"500"}
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
          borderBottomWidth={2}
          fontSize={16}
          fontWeight={"500"}
          borderBottomColor={"#212121"}
          flex={1}
          keyboardType="numeric"
          cursorColor={"#212121"}
        />
      </XStack>
    </View>
  );
};
