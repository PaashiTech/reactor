import { Text, View } from "tamagui";
import { UnmzLinearGradient } from "../misc/UnmzLinearGradient";
import { Pressable } from "react-native";

interface SecondaryButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  icon,
  iconAfter,
  disabled,
  onPress,
}) => {
  return (
    <UnmzLinearGradient
      paddingHorizontal={1}
      paddingVertical={1}
      borderRadius={9999}
      height={42}
      colors={disabled ? ["#E7E7E7", "#E7E7E7"] : undefined}
    >
      <Pressable
        onPress={onPress}
        // android_ripple={
        //   !disabled ? { borderless: false, foreground: true } : null
        // }
      >
        <View
          paddingHorizontal={23}
          paddingVertical={11}
          backgroundColor={"#fff"}
          borderRadius={9999}
          alignItems="center"
          justifyContent="center"
          gap={8}
          flexDirection="row"
        >
          {icon}
          <Text
            color={disabled ? "#C6C6C6" : "#262626"}
            fontWeight={"600"}
            letterSpacing={0.28}
          >
            {children}
          </Text>
          {iconAfter}
        </View>
      </Pressable>
    </UnmzLinearGradient>
  );
};
