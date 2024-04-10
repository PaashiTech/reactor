import { SvgProps } from "@unmaze/assets";
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

  const hitSlopValue = 20
  return (
    <Pressable
      android_ripple={{
        borderless: true,
        foreground: true,
        radius: 20
      }}
      hitSlop={{top: hitSlopValue, bottom: hitSlopValue,left: hitSlopValue, right: hitSlopValue }}
      {...props}
    >
      <View
        justifyContent="center"
        alignItems="center"
      >
        <Icon width={size} height={size} />
      </View>
    </Pressable>
  );
};
