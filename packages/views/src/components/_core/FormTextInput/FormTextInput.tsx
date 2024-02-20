import { Input, Label, View } from "tamagui";

interface FormTextInputProps {
  label: string;
  placeholder: string;
}

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label,
  placeholder,
}) => {
  return (
    <View>
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
        borderBottomColor={"#6F6F6F"}
        focusStyle={{
          borderBottomColor: "#262626",
        }}
      />
    </View>
  );
};
