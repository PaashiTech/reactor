import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AccentText,
  BodyText,
  HeadingText,
  IconButton,
  OTPCountdownTimer,
  SVGWrapper,
  Spinner,
  UnmzGradientButton,
  View,
  XStack,
  useUserStore,
} from "@unmaze/views";
import {
  Verified,
  SaafeLogo,
  CanaraBankLogo,
  CheckGreen,
  ChevronLeftSmall,
  ChevronRightSmall,
  SvgProps,
  ICICIBankLogo,
  SbiBankLogo,
} from "@unmaze/assets";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { OTPInputBottomSheet } from "../shared/OTPInputBottomSheet";
import { useNavigation } from "@react-navigation/native";
import { CONSENT_SCREEN_ID } from "../../../../screens/onboarding/types";
import { OnboardingStackRouteProps } from "platforms/mobile/src/navigation/navigators/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Animated,
  FlatList,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

const fakeApiCall = (
  success: boolean
): Promise<{ status: number; message: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          message: "Success",
        });
      } else {
        reject({
          status: 404,
          message: "Not found",
        });
      }
    }, 3000);
  });
};

const accountDiscoveryBankList: {
  bank: {
    bankLogo: React.FC<SvgProps>;
    bankTitle: string;
  };
}[] = [
  {
    bank: {
      bankLogo: CanaraBankLogo,
      bankTitle: "Canara Bank",
    },
  },
  {
    bank: {
      bankLogo: ICICIBankLogo,
      bankTitle: "ICICI Bank",
    },
  },
  {
    bank: {
      bankLogo: SbiBankLogo,
      bankTitle: "SBI Bank",
    },
  },
];

export const AuthoriseBanksBottomSheet = React.forwardRef<BottomSheetModal>(
  (props, ref: any) => {
    const {
      phone: { primary },
    } = useUserStore();

    const navigation =
      useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();

    const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

    const snapPointValue = accountDiscoveryBankList.length > 1 ? 406 : 360;

    const snapPoints = useMemo(() => [snapPointValue, snapPointValue], []);

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
      if (currentIndex < accountDiscoveryBankList.length - 1) {
        slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
      }
    };

    const srollToPrevious = () => {
      if (currentIndex > 0) {
        slidesRef.current?.scrollToIndex({ index: currentIndex - 1 });
      }
    };

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleComponent={null}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="none"
          />
        )}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        {!isAuthorised ? (
          <BottomSheetView
            style={{ flex: 1, paddingHorizontal: 20, paddingTop: 24 }}
          >
            <XStack justifyContent="center">
              <View position="absolute" left={0} top={0}>
                {currentIndex > 0 ? (
                  <IconButton
                    icon={ChevronLeftSmall}
                    onPress={srollToPrevious}
                  />
                ) : (
                  <View></View>
                )}
              </View>
              <XStack gap={6} justifyContent="center">
                <HeadingText>
                  <HeadingText color="#08BDBA">{currentIndex + 1}/</HeadingText>
                  {accountDiscoveryBankList.length}
                </HeadingText>
                <AccentText>Authorization</AccentText>
              </XStack>
              <View position="absolute" right={0} top={0}>
                {currentIndex < accountDiscoveryBankList.length - 1 &&
                accountDiscoveryBankList.length > 1 ? (
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
              data={accountDiscoveryBankList}
              renderItem={({ item }) => (
                <AuthoriseBanksSliderItem
                  bank={item.bank}
                  mobileNumber={primary}
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
            {accountDiscoveryBankList.length > 1 && (
              <View mt={24} ai="center">
                <AuthoriseBanksSliderPagination
                  data={accountDiscoveryBankList}
                  scrollX={scrollX}
                />
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
          </BottomSheetView>
        ) : (
          <BottomSheetView
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingTop: 24,
              paddingBottom: 12,
            }}
          >
            <View flex={1} justifyContent="space-between">
              <View alignItems="center" paddingTop={16}>
                <CheckGreen width={80} height={80} />
                <HeadingText mt={32} size="xl">
                  Congratulations!
                </HeadingText>
                <AccentText
                  mt={12}
                  textAlign="center"
                  size="lg"
                  color="#525252"
                >
                  You have successfully authorized 3 accounts
                </AccentText>
              </View>
              <UnmzGradientButton
                onPress={() => {
                  ref.current?.close();
                  navigation.navigate(CONSENT_SCREEN_ID);
                }}
              >
                View Consent
              </UnmzGradientButton>
            </View>
          </BottomSheetView>
        )}
      </BottomSheetModal>
    );
  }
);

type AuthoriseBanksSliderItemProps = {
  bank: {
    bankLogo: React.FC<SvgProps>;
    bankTitle: string;
  };
  mobileNumber: string;
};

const AuthoriseBanksSliderItem: React.FC<AuthoriseBanksSliderItemProps> = ({
  bank: { bankLogo, bankTitle },
  mobileNumber,
}) => {
  const [code, setCode] = useState<string>("");
  const [isSubmitting, setIsSubitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const handleCode = (textValue: string) => {
    // replace any non-numeric input with an empty string
    if (isSubmitting) return;
    const newValue = textValue.replace(/[^0-9]/g, "");
    setCode(newValue);
  };

  useEffect(() => {
    if (code.length !== 6) {
      return;
    }
    let id;
    setIsSuccess(false);
    setIsError(false);
    const fetchData = async () => {
      // Make API Call
      console.log("API Call");
      setIsSubitting(true);
      Keyboard.dismiss();
      try {
        const data = await fakeApiCall(true);
        setIsSubitting(false);
        setIsSuccess(true);

        // id = setTimeout(() => {
        //   setIsAuthorised(true);
        // }, 1000);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsSubitting(false);
      }
    };

    fetchData(); // Call the async function inside useEffect

    return () => clearTimeout(id);
  }, [code]);

  return (
    <View width={width}>
      <View mt={24}>
        <XStack gap={8}>
          <SVGWrapper iconSVG={bankLogo} size="md" />
          <AccentText>{bankTitle}</AccentText>
        </XStack>
        <BodyText mt={8} size="sm" color="#6F6F6F">
          The OTP will be sent to{" "}
          <AccentText size="sm" color="#262626">
            +91-{mobileNumber}
          </AccentText>
        </BodyText>
      </View>

      <View mt={24}>
        <OTPInputBottomSheet
          code={code}
          handleCode={handleCode}
          isError={isError}
          isSubmitting={isSubmitting}
          isSuccess={isSuccess}
        />
        {!isSubmitting && !isSuccess && (
          <XStack mt={24} gap={4}>
            <BodyText color="#6F6F6F">Didn't receive the OTP?</BodyText>
            <OTPCountdownTimer timerSeconds={60} onResendPress={() => {}} />
          </XStack>
        )}

        {isSubmitting && (
          <XStack mt={24} gap={8}>
            <Spinner size="small" color="#D9D9D9" />
            <AccentText size="md" color="#6F6F6F">
              Verifying
            </AccentText>
          </XStack>
        )}

        {isSuccess && (
          <XStack mt={24} gap={8}>
            <Verified />
            <AccentText size="md" color="#198038">
              Verified successfully
            </AccentText>
          </XStack>
        )}
      </View>
    </View>
  );
};

type AuthoriseBanksSliderPaginationProps = {
  data: {
    bank: {
      bankLogo: React.FC<SvgProps>;
      bankTitle: string;
    };
  }[];
  scrollX: Animated.Value;
};

export const AuthoriseBanksSliderPagination: React.FC<
  AuthoriseBanksSliderPaginationProps
> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View flexDirection="row" paddingHorizontal={20}>
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
