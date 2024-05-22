import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AccentText,
  BodyText,
  OTPCountdownTimer,
  Spinner,
  View,
  XStack,
  useUserStore,
} from "@unmaze/views";
import {
  UnmazeModalLogo,
  SaafeModalLogo,
  ChainLink,
  Verified,
} from "@unmaze/assets";
import React, { useEffect, useMemo, useState } from "react";
import { OTPInputBottomSheet } from "./OTPInputBottomSheet";
import { useNavigation } from "@react-navigation/native";
import { LOADING_SCREEN_ID } from "../../../screens/onboarding/types";
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

export const LinkAccountsBottomSheet = React.forwardRef<BottomSheetModal>(
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

    const snapPoints = useMemo(() => [380, 380], []);

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
            navigation.replace(LOADING_SCREEN_ID);
            ref.current?.close();
          }, 2000);
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
        <BottomSheetView
          style={{ flex: 1, paddingHorizontal: 20, paddingTop: 24 }}
        >
          <XStack w="100%" alignItems="center" justifyContent="space-between">
            <UnmazeModalLogo />
            <ChainLink height={24} width={24} />
            <SaafeModalLogo />
          </XStack>

          <View mt={20}>
            <AccentText size="lg">
              Unmaze partners with Saafe to securely connect your accounts.
            </AccentText>
            <BodyText mt={8} size="sm" color="#6F6F6F">
              Enter the OTP sent to your registered mobile number
            </BodyText>
            <AccentText mt={2} size="sm">
              +91-{primary}
            </AccentText>
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

          <View mt={32} paddingVertical={16}>
            <BodyText size="sm" textAlign="center" color="#6F6F6F">
              By continuing you agree with Unmaze's & Saafe's{" "}
              <BodyText
                size="sm"
                color="#035E5D"
                textDecorationLine="underline"
              >
                T&C
              </BodyText>
            </BodyText>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);
