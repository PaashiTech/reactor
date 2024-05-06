import { PasswordInput, Text, View } from "@unmaze/views";
import { useForm } from "react-hook-form";

export const BlankTestScreen = () => {
  const { control } = useForm();
  return (
    <View flex={1} jc="center" paddingHorizontal={20}>
      <PasswordInput
        name="password"
        label="Enter Password"
        control={control}
        placeholder="8-32 characters"
      />
    </View>
  );
};
