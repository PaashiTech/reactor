import { Input, Label, Text, View } from "tamagui";
import { TextInputProps } from "react-native";
import { Controller, Control } from "react-hook-form";

interface FormTextInputProps extends TextInputProps {
  label: string;
  name: string;
  control: Control;
}

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label,
  name,
  placeholder,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: `${label} is required`,
        },
        minLength: {
          value: 3,
          message: `${label} should have more than 3 letters`,
        },
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View gap={4}>
          <Label
            unstyled
            fontSize={14}
            letterSpacing={0.28}
            color={"#525252"}
            fontWeight="400"
          >
            {label}
          </Label>

          <Input
            padding={4}
            paddingBottom={8}
            unstyled
            placeholder={placeholder}
            fontSize={14}
            borderBottomWidth={1}
            fontWeight={"500"}
            borderBottomColor={error ? "#DA1E28" : "#6F6F6F"}
            focusStyle={{
              borderBottomColor: error ? "#DA1E28" : "#262626",
            }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />

          {error && <Text color="#DA1E28">{error.message || "Error"}</Text>}
        </View>
      )}
    />
  );
};
