import { Dimensions } from "react-native";
import {
  View,
  Text,
  YStack,
  HeadingText,
  AccentText,
  Image,
} from "@unmaze/views";
import { SliderDataType } from "./SliderData";

type SlideItemProps = {
  item: SliderDataType;
};
export const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
  const { width } = Dimensions.get("screen");

  return (
    <View width={width}>
      <View flex={1} mt={30} jc="center" ai="center">
        <Image
          source={item.image}
          width={340}
          height={461}
          // resizeMode="stretch"
        />
      </View>
      <YStack gap={8} marginVertical={24} paddingHorizontal={20}>
        <HeadingText size="xl" color="#161616">
          {item.heading}
        </HeadingText>
        <AccentText color="#525252">{item.description}</AccentText>
      </YStack>
    </View>
  );
};
