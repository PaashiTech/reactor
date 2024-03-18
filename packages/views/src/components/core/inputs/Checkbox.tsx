import { CheckSmall } from "@unmaze/assets";
import { View, ViewProps } from "tamagui";

interface CheckBoxProps extends ViewProps {
  checked: boolean;
  borderHidden?: boolean;
}

export const Checkbox: React.FC<CheckBoxProps> = ({
  checked,
  borderHidden,
}) => {
  return (
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: borderHidden ? "transparent" : "#035E5D",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: checked === true ? "#035E5D" : "transparent",
      }}
    >
      {checked && <CheckSmall width={20} />}
    </View>
  );
};
