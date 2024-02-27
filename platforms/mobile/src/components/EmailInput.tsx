import { Input, Text, View } from "@unmaze/views";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

interface EmailInputProps extends TextInputProps {
  name: string;
  control: Control;
}

export const EmailInput: React.FC<EmailInputProps> = ({ name, control }) => {
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: `Email is required`,
        },

        pattern: EMAIL_REGEX,
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View gap={8}>
          <Text color="#444444">Email Address</Text>
          <Input
            autoFocus
            unstyled
            paddingHorizontal={4}
            paddingBottom={10}
            placeholder="eg. youremail@gmail.com"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            borderBottomWidth={2}
            fontSize={16}
            fontWeight={"500"}
            fontFamily={"$body"}
            placeholderTextColor="$placeholderColor"
            borderBottomColor={error ? "#DA1E28" : "#212121"}
            cursorColor={"#212121"}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
          />
          {error && (
            <Text color="#DA1E28">Please enter valid email address</Text>
          )}
        </View>
      )}
    />
  );
};
