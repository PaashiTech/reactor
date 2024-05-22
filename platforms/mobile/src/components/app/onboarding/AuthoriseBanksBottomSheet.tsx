import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AccentText,
  BodyText,
  HeadingText,
  OTPCountdownTimer,
  SVGWrapper,
  Spinner,
  UnmzGradientButton,
  View,
  XStack,
  YStack,
  useUserStore,
} from "@unmaze/views";
import {
  UnmazeModalLogo,
  SaafeModalLogo,
  ChainLink,
  Verified,
  SaafeLogo,
  CanaraBankLogo,
  CheckGreen,
} from "@unmaze/assets";
import React, { useEffect, useMemo, useState } from "react";
import { OTPInputBottomSheet } from "./OTPInputBottomSheet";
import { useNavigation } from "@react-navigation/native";
import {
  CONSENT_SCREEN_ID,
  LOADING_SCREEN_ID,
} from "../../../screens/onboarding/types";
import { OnboardingStackRouteProps } from "platforms/mobile/src/navigation/navigators/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Keyboard } from "react-native";

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

export const AuthoriseBanksBottomSheet = React.forwardRef<BottomSheetModal>(
  (props, ref: any) => {
    const {
      phone: { primary },
    } = useUserStore();

    const navigation =
      useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();

    const [code, setCode] = useState<string>("");
    const [isSubmitting, setIsSubitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

    const snapPoints = useMemo(() => [360, 360], []);

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

          id = setTimeout(() => {
            setIsAuthorised(true);
          }, 1000);
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
            <XStack gap={6} justifyContent="center">
              <HeadingText>
                <HeadingText color="#08BDBA">1/</HeadingText>1
              </HeadingText>
              <AccentText>Authorization</AccentText>
            </XStack>
            <HeadingText mt={12} size="xl">
              Securely authorize your Bank account
            </HeadingText>

            <View mt={24}>
              <XStack gap={8}>
                <SVGWrapper iconSVG={CanaraBankLogo} size="md" />
                <AccentText>Canara Bank</AccentText>
              </XStack>
              <BodyText mt={8} size="sm" color="#6F6F6F">
                The OTP will be sent to{" "}
                <AccentText size="sm" color="#262626">
                  +91-{primary}
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
                  <OTPCountdownTimer
                    timerSeconds={60}
                    onResendPress={() => {}}
                  />
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
