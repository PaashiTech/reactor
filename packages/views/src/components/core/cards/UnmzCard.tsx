import DropShadow from "react-native-drop-shadow";
import { View, ViewProps } from "tamagui";

interface UnmzCardProps extends ViewProps {}

export const UnmzCard: React.FC<UnmzCardProps> = ({ children, ...props }) => {
  return (
    <DropShadow
      style={{
        shadowColor: "#21272a",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 2,
      }}
    >
      <View borderRadius={12} backgroundColor="#fff" {...props}>
        {children}
      </View>
    </DropShadow>
  );
};
