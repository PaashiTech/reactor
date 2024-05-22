import { View } from "@unmaze/views";
import Animated from "react-native-reanimated";

type SharedProgressbarProps = {
  value: number;
  sharedTransitionTag: string;
};

export const SharedProgressbar: React.FC<SharedProgressbarProps> = ({
  value,
  sharedTransitionTag,
}) => {
  return (
    <View height={4} bg="#EBFFFF">
      <Animated.View
        sharedTransitionTag={sharedTransitionTag}
        style={{
          width: `${value}%`,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          height: 4,
          backgroundColor: "#08BDBA",
        }}
      ></Animated.View>
    </View>
  );
};
