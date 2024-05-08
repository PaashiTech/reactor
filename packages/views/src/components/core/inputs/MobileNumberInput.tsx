import { Input, Text, View, XStack } from "tamagui";
import { Control, Controller } from "react-hook-form";
import { IconButton } from "../buttons/IconButton";
import { CrossRoundBorder } from "@unmaze/assets";

type MobileNumberInputProps = {
  control: Control;
  name: string;
  showDeleteButton?: boolean;
};

export const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  control,
  name,
  showDeleteButton,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <Text color="#525252" fontSize={14} fontWeight={"400"}>
            Mobile Number
          </Text>

          <XStack gap={8} position="relative">
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
              flexGrow={1}
              keyboardType="numeric"
            />
            <View
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              justifyContent="center"
            >
              <IconButton
                icon={CrossRoundBorder}
                onPress={() => onChange("")}
              />
            </View>
          </XStack>

          {error && (
            <Text color="#DA1E28" marginTop={8}>
              {error.message || "Error"}
            </Text>
          )}
        </View>
      )}
    />
  );
};
