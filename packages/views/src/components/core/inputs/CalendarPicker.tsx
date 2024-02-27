import { useState } from "react";
import { Label, View, Input, Button, XStack } from "tamagui";
import { TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { NavigateNext, NavigateBefore } from "@unmaze/assets";
import { PopupModal } from "../modals/PopupModal";

export const CalendarPicker: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");

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
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Input
          value={value.split("-").reverse().join("/")}
          editable={false}
          color={"#232323"}
          padding={4}
          paddingBottom={8}
          unstyled
          placeholder="DD/MM/YYYY"
          fontSize={14}
          borderBottomWidth={1}
          fontWeight={"500"}
          borderBottomColor={"#6F6F6F"}
          focusStyle={{
            borderBottomColor: "#262626",
          }}
        />
      </TouchableOpacity>
      <PopupModal isVisible={isVisible} onModalClose={() => setVisible(false)}>
        <View
          alignItems="center"
          justifyContent="center"
          backgroundColor={"#fff"}
          padding={20}
          borderRadius={20}
        >
          <Calendar
            style={{ height: 360, width: 296 }}
            renderArrow={(direction) =>
              direction === "left" ? <NavigateBefore /> : <NavigateNext />
            }
            enableSwipeMonths
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "orange",
              },
            }}
          />
          <XStack gap={8} alignSelf="flex-end">
            <Button
              size="$3"
              variant="outlined"
              onPress={() => {
                setVisible(false);
                setSelected(value);
              }}
            >
              Cancel
            </Button>
            <Button
              size="$3"
              variant="outlined"
              onPress={() => {
                setValue(selected);
                setVisible(false);
              }}
            >
              OK
            </Button>
          </XStack>
        </View>
      </PopupModal>
    </View>
  );
};
