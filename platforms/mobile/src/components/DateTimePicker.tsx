import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button, Text, View } from "@unmaze/views";

export const DateTimePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const show = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <View>
      <Button onPress={show}>Pick Date</Button>
      <Text>Selected: {date.toLocaleString()}</Text>
    </View>
  );
};
