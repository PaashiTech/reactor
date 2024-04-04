import { SvgProps } from "@unmaze/assets";
import React from "react";
import { Pressable, PressableProps } from "react-native";
import { View } from "tamagui";

interface IconButtonProps extends PressableProps {
  icon: React.FC<SvgProps>;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  size = 20,
  ...props
}) => {
  return (
    <Pressable
      android_ripple={{
        borderless: true,
        foreground: true,
      }}
      {...props}
    >
      <View
        width={size * 1.5}
        aspectRatio={"1/1"}
        justifyContent="center"
        alignItems="center"
      >
        <Icon width={size} height={size} />
      </View>
    </Pressable>
  );
};
