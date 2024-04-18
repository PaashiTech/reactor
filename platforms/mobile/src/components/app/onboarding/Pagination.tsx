import { View } from "@unmaze/views";
import { Animated, Dimensions } from "react-native";
import { SliderDataType } from "./SliderData";

type PaginationProps = {
  data: SliderDataType[];
  scrollX: Animated.Value;
};

export const Pagination: React.FC<PaginationProps> = ({ data, scrollX }) => {
  const { width } = Dimensions.get("screen");
  return (
    <View flexDirection="row" paddingHorizontal={20} justifyContent="center">
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 32, 12],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#C6C6C6", "#035E5D", "#C6C6C6"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx}
            style={{
              width: dotWidth,
              height: 8,
              borderRadius: 8,
              marginHorizontal: 3,
              backgroundColor: backgroundColor,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};
