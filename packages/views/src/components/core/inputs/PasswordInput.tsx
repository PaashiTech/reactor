import { Input, Label, Text, View } from "tamagui";
import { TextInputProps } from "react-native";
import { Controller, ControllerProps } from "react-hook-form";
import { useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { EyeHidden, EyeVisible } from "@unmaze/assets";

interface PasswordInputProps
  extends Omit<TextInputProps, "defaultValue">,
    Pick<ControllerProps, "name" | "control" | "rules"> {
  label: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  placeholder,
  control,
  rules,
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
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

          <View position="relative">
            <Input
              secureTextEntry={!passwordVisible}
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
              maxLength={32}
            />
            <View
              position="absolute"
              top={0}
              bottom={0}
              marginTop={8}
              right={4}
            >
              <IconButton
                icon={passwordVisible ? EyeVisible : EyeHidden}
                onPress={() => setPasswordVisible((prev) => !prev)}
              />
            </View>
          </View>
          {error && <Text color="#DA1E28">{error.message || "Error"}</Text>}
        </View>
      )}
    />
  );
};
