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
  SbiBankLogo,
  SvgProps,
  BOBBankLogo,
  AxisBankLogo,
} from "@unmaze/assets";
import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackRouteProps } from "platforms/mobile/src/navigation/navigators/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type BankChipDataType = BankChipProps & {
  id: number;
};

const BankChipData: BankChipDataType[] = [
  {
    id: 1,
    accountNumber: "1234052",
    bankLogo: AxisBankLogo,
  },
  {
    id: 2,
    accountNumber: "1236523",
    bankLogo: SbiBankLogo,
  },
  {
    id: 3,
    accountNumber: "1234785",
    bankLogo: BOBBankLogo,
  },
];

export const FindOutWhyBottomSheet = React.forwardRef<BottomSheetModal>(
  (props, ref: any) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();

    const snapPoints = useMemo(() => ["70%", "70%"], []);

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
          style={{
            flex: 1,
          }}
        >
          <View
            flex={1}
            paddingHorizontal={20}
            paddingVertical={24}
            justifyContent="space-between"
          >
            <View paddingTop={16}>
              <YStack gap={24}>
                <YStack gap={4}>
                  <HeadingText size="lg">
                    Couldnt find your account?
                  </HeadingText>
                  <AccentText size="sm" color="#6F6F6F">
                    Not able to locate your account using RBI's Account
                    Aggregator Ecosystem, see possible reasons.
                  </AccentText>
                </YStack>

                <YStack gap={4}>
                  <AccentText>You have already added these accounts</AccentText>
                  <BodyText size="sm" color="#6F6F6F">
                    Your linked accounts on Unmaze:
                  </BodyText>
                  <XStack gap={16}>
                    {BankChipData.map((item) => (
                      <BankChip
                        key={item.id}
                        accountNumber={item.accountNumber}
                        bankLogo={item.bankLogo}
                      />
                    ))}
                  </XStack>
                </YStack>

                <YStack gap={4}>
                  <AccentText>You have a current or joint account?</AccentText>
                  <BodyText size="sm" color="#6F6F6F">
                    Only individual savings accounts are supported on the
                    Account Aggregator Ecosystem.
                  </BodyText>
                </YStack>
                <YStack gap={4}>
                  <AccentText>Account linked to another number?</AccentText>
                  <BodyText size="sm" color="#6F6F6F">
                    Only accounts linked to your registered mobile number on
                    Unmaze can be linked
                  </BodyText>
                </YStack>
                <YStack gap={4}>
                  <AccentText>Your bank account is inactive</AccentText>
                  <BodyText size="sm" color="#6F6F6F">
                    Only active accounts can be linked, please contact your bank
                  </BodyText>
                </YStack>
              </YStack>
            </View>
            <UnmzGradientButton
              onPress={() => {
                ref.current?.close();
              }}
            >
              Got it!
            </UnmzGradientButton>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

type BankChipProps = {
  accountNumber: string;
  bankLogo: React.FC<SvgProps>;
};

const BankChip: React.FC<BankChipProps> = ({ accountNumber, bankLogo }) => {
  return (
    <XStack gap={4} alignItems="center">
      <SVGWrapper iconSVG={bankLogo} size="sm" />
      <BodyText size="sm" color="#525252">
        {accountNumber.slice(-4)}
      </BodyText>
    </XStack>
  );
};
