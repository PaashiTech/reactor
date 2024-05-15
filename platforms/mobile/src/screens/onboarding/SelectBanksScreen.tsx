import {
  BodyText,
  HeadingText,
  Progress,
  ScrollView,
  UnmzGradientButton,
  View,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import { SELECT_BANKS_SCREEN_ID, SelectBanksScreenProps } from "./types";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LinkAccountsBottomSheet } from "../../components/app/onboarding/LinkAccountsBottomSheet";

const _SelectBanksScreen: React.FC<SelectBanksScreenProps> = ({
  navigation,
  route,
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <>
      <View flex={1} justifyContent="space-between">
        <View flex={1}>
          <Progress value={50} height={4} backgroundColor="#EBFFFF">
            <Progress.Indicator
              animation="medium"
              backgroundColor="#08BDBA"
              borderTopRightRadius={2}
              borderBottomRightRadius={2}
            />
          </Progress>
          <ScrollView
            flex={1}
            showsVerticalScrollIndicator={false}
            paddingHorizontal={20}
            paddingVertical={24}
          >
            <View gap={2}>
              <HeadingText size="lg">
                Select the banks you hold an account.
              </HeadingText>
              <BodyText color="#6F6F6F">You can select multiple banks</BodyText>
            </View>
          </ScrollView>
        </View>

        <SaafeFooter>
          <YStack gap={12}>
            <BodyText textAlign="center" size="sm" color="#525252">
              Connect at least 1 of your banks to proceed
            </BodyText>
            <UnmzGradientButton onPress={handleBottomSheetOpen}>
              Continue
            </UnmzGradientButton>
          </YStack>
        </SaafeFooter>
        <LinkAccountsBottomSheet ref={bottomSheetRef} />
      </View>
    </>
  );
};

export const SelectBanksScreen: UnmzNavScreen = {
  key: SELECT_BANKS_SCREEN_ID,
  title: "Link Accounts",
  content: _SelectBanksScreen,
};