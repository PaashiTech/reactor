import React from "react";
import { Pressable, PressableProps } from "react-native";

interface IconButtonProps extends PressableProps {
  icon: React.ElementType;
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
        radius: size * 0.75,
        borderless: true,
        foreground: true,
      }}
      {...props}
    >
      <Icon width={size} height={size} />
    </Pressable>
  );
};
