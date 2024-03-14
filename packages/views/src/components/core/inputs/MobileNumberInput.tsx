import { Input, Text, View, XStack } from "tamagui";
import { Control, Controller } from "react-hook-form";

type MobileNumberInputProps = {
  control: Control;
  name: string;
};

export const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  control,
  name,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: `Mobile number is required`,
        },
        minLength: {
          value: 10,
          message: `Mobile number should have 10 letters`,
        },
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
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
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              borderBottomWidth={1}
              fontSize={14}
              fontWeight={"500"}
              fontFamily={"$body"}
              borderBottomColor={error ? "#DA1E28" : "#6F6F6F"}
              focusStyle={{
                borderBottomColor: error ? "#DA1E28" : "#262626",
              }}
              flex={1}
              keyboardType="numeric"
            />
          </XStack>

          {error && (
            <Text color="#DA1E28" marginTop={8} marginLeft={40}>
              {error.message || "Error"}
            </Text>
          )}
        </View>
      )}
    />
  );
};
