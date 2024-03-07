import { Pressable } from "react-native";
import { forwardRef, useState } from "react";
import { useCheckbox } from "@tamagui/checkbox-headless";
import type { View } from "react-native";
import type { CheckboxProps as CheckboxHeadlessProps } from "@tamagui/checkbox-headless";
import { CheckSmall } from "@unmaze/assets";

export const Checkbox = forwardRef<View, CheckboxHeadlessProps>(
  (props, ref) => {
    const [checked, setChecked] = useState(props.checked || false);
    const { checkboxProps, checkboxRef, bubbleInput } = useCheckbox(
      props,
      [checked, setChecked],
      ref
    );

    return (
      <Pressable
        style={{
          width: 15,
          height: 15,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: "#035E5D",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: checked === true ? "#035E5D" : "transparent",
        }}
        ref={checkboxRef}
        {...checkboxProps}
      >
        {checked === true && <CheckSmall width={10} />}
        {bubbleInput}
      </Pressable>
    );
  }
);
