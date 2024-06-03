import { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  CanaraBankLogo,
  ChevronLeftSmall,
  ChevronRightSmall,
  ICICIBankLogo,
  SaafeLogo,
  SbiBankLogo,
  SvgProps,
} from "@unmaze/assets";
import {
  AccentText,
  BodyText,
  HeadingText,
  IconButton,
  View,
  XStack,
  useUserStore,
} from "@unmaze/views";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { AuthoriseBanksSliderItem } from "./AuthoriseBanksSliderItem";
import { AuthoriseBanksSliderPagination } from "./AuthoriseBanksSliderPagination";
import { useRef, useState } from "react";

type AuthoriseBanksSliderProps = {
  banks: {
    bank: {
      bankLogo: React.FC<SvgProps>;
      bankTitle: string;
    };
  }[];
  handleAuthorise: (title: string) => void;
};

export const AuthoriseBanksSlider: React.FC<AuthoriseBanksSliderProps> = ({
  banks,
  handleAuthorise,
}) => {
  const {
    phone: { primary },
  } = useUserStore();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

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

  const srollToNext = () => {
    if (currentIndex < banks.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const srollToPrevious = () => {
    if (currentIndex > 0) {
      slidesRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <>
      <XStack justifyContent="center">
        <View position="absolute" left={0} top={0}>
          {currentIndex > 0 ? (
            <IconButton icon={ChevronLeftSmall} onPress={srollToPrevious} />
          ) : (
            <View></View>
          )}
        </View>
        <XStack gap={6} justifyContent="center">
          <HeadingText>
            <HeadingText color="#08BDBA">{currentIndex + 1}/</HeadingText>
            {banks.length}
          </HeadingText>
          <AccentText>Authorization</AccentText>
        </XStack>
        <View position="absolute" right={0} top={0}>
          {currentIndex < banks.length - 1 && banks.length > 1 ? (
            <IconButton icon={ChevronRightSmall} onPress={srollToNext} />
          ) : (
            <View></View>
          )}
        </View>
      </XStack>

      <HeadingText mt={12} size="xl">
        Securely authorize your Bank account
      </HeadingText>

      <FlatList
        ref={slidesRef}
        data={banks}
        renderItem={({ item }) => (
          <AuthoriseBanksSliderItem
            bank={item.bank}
            mobileNumber={primary}
            handleAuthorise={handleAuthorise}
          />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        snapToAlignment="center"
        pointerEvents="none"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        onScroll={handleOnScroll}
        scrollEventThrottle={32}
      />
      {banks.length > 1 && (
        <View mt={24} ai="center">
          <AuthoriseBanksSliderPagination data={banks} scrollX={scrollX} />
        </View>
      )}
      <View mt={32} paddingVertical={16} alignItems="center">
        <XStack alignItems="center" gap={8}>
          <BodyText size="sm" textAlign="center" color="#6F6F6F">
            Powered by RBI's Account Aggregator
          </BodyText>
          <SaafeLogo />
        </XStack>
      </View>
    </>
  );
};
