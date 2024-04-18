import { Dimensions } from "react-native";
import { View, Text, YStack, HeadingText, AccentText } from "@unmaze/views";
import { SliderDataType } from "./SliderData";

type SlideItemProps = {
  item: SliderDataType;
};
export const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
  const { width } = Dimensions.get("screen");

  return (
    <View width={width} bg="#fff" paddingHorizontal={20} pt={24}>
      <View flex={1} bg="#E7E7E7" jc="center" ai="center">
        <View
          height={100}
          width={100}
          borderWidth={4}
          borderColor="#035E5D"
          borderRadius={16}
          ai="center"
          jc="center"
        >
          <Text color="#035E5D" fontSize={48} fontWeight={"600"}>
            {item.id}
          </Text>
        </View>
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
