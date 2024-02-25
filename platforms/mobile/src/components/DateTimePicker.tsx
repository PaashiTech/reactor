import { Input, Label, View, XStack } from "@unmaze/views";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import RNMaterialDatetimePicker from "react-native-material-datetime-picker";
import { Calendar } from "@unmaze/assets";
import { IconButton } from "./IconButton";

export const DateTimePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  enum AndroidPickerMode {
    DATE = "date",
    TIME = "time",
  }

  return (
    <View>
      <Label
        unstyled
        fontSize={14}
        letterSpacing={0.28}
        color={"#525252"}
        fontWeight="400"
      >
        Date of birth
      </Label>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <XStack
          padding={0}
          ai="center"
          jc="space-between"
          borderBottomWidth={1}
          borderBottomColor={"#6F6F6F"}
          p={4}
          pb={8}
        >
          <Input
            value={currentDate.toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            unstyled
            p={0}
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
            value={currentDate}
            mode={AndroidPickerMode.DATE}
            onConfirm={(date) => {
              setCurrentDate(date);
              setIsVisible(false);
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
