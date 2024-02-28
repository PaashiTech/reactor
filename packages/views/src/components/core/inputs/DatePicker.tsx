import { Input, Label, Text, View, XStack } from "tamagui";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import RNMaterialDatetimePicker, {
  AndroidPickerMode,
} from "react-native-material-datetime-picker";
import { Calendar } from "@unmaze/assets";
import { IconButton } from "../buttons/IconButton";
import { Control, Controller } from "react-hook-form";

type DatePickerProps = {
  label: string;
  name: string;
  control: Control;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  control,
  name,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: "Please enter D.O.B",
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
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

          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <XStack
              padding={0}
              paddingBottom={8}
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth={1}
              borderBottomColor={"#6F6F6F"}
            >
              <Input
                value={
                  value &&
                  value.toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                }
                unstyled
                padding={0}
                editable={false}
                color={"#161616"}
                placeholder="DD/MM/YYYY"
                fontSize={14}
                fontWeight={"500"}
                letterSpacing={0.28}
              />
              <IconButton icon={Calendar} onPress={() => setIsVisible(true)} />
            </XStack>

            {isVisible && (
              <RNMaterialDatetimePicker
                value={new Date()}
                mode={AndroidPickerMode.DATE}
                onConfirm={(date) => {
                  onChange(date);
                  setIsVisible(false);
                }}
              />
            )}
          </TouchableOpacity>

          {error && <Text color="#DA1E28">{error.message || "Error"}</Text>}
        </View>
      )}
    />
  );
};
