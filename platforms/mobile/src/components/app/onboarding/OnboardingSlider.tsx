import { BodyText, Button, View, XStack } from "@unmaze/views";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { sliderData } from "./SliderData";
import { Pagination } from "./Pagination";
import { SlideItem } from "./SlideItem";

export const OnboardingSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  // const viewableItemsChanged = useRef(({ viewableItems }) => {
  //   setCurrentIndex(viewableItems[0].index);
  // }).current;

  // const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  // const srollToNext = () => {
  //   if (currentIndex < sliderData.length - 1) {
  //     slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
  //   }
  // };

  // const srollToPrevious = () => {
  //   if (currentIndex > 0) {
  //     slidesRef.current?.scrollToIndex({ index: currentIndex - 1 });
  //   }
  // };

  return (
    <View flex={1}>
      <FlatList
        ref={slidesRef}
        data={sliderData}
        renderItem={({ item }) => <SlideItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        // onViewableItemsChanged={viewableItemsChanged}
        // viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
      />
      <Pagination data={sliderData} scrollX={scrollX} />
      {/* <XStack mt={12} justifyContent="space-between" alignItems="center">
        <Button marginHorizontal="auto" onPress={srollToPrevious}>
          Previous
        </Button>
        <BodyText>{`${currentIndex + 1}/${sliderData.length}`}</BodyText>
        <Button marginHorizontal="auto" onPress={srollToNext}>
          Next
        </Button>
      </XStack> */}
    </View>
  );
};
