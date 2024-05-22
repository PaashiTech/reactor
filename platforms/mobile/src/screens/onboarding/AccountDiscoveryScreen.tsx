import {
  BodyText,
  HeadingText,
  ScrollView,
  UnmzGradientButton,
  View,
  ViewProps,
  XStack,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  AccountDiscoveryScreenProps,
  CONSENT_SCREEN_ID,
  SELECT_BANKS_SCREEN_ID,
} from "./types";
import { useEffect, useRef, useState } from "react";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { AccountSelectionCard } from "../../components/app/onboarding/AccountSelectionCard";
import { Accounts } from "../../components/app/onboarding/constants";
import { CustomHeader } from "../../navigation/helpers/CustomHeader";
import { SharedProgressbar } from "../../components/app/onboarding/SharedProgressbar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthoriseBanksBottomSheet } from "../../components/app/onboarding/AuthoriseBanksBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FindOutWhyBottomSheet } from "../../components/app/onboarding/FindOutWhyBottomSheet";

const _AccountDiscoveryScreen: React.FC<AccountDiscoveryScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const findOutWhyBottomSheetRef = useRef<BottomSheetModal>(null);
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate(SELECT_BANKS_SCREEN_ID); // Navigate to your desired screen
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, []);

  const handleAccountSelect = (accountNumber: string) => {
    if (selectedAccounts.includes(accountNumber)) {
      setSelectedAccounts((prev) =>
        prev.filter((item) => item !== accountNumber)
      );
    } else {
      setSelectedAccounts((prev) => [...prev, accountNumber]);
    }
  };

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <View flex={1} {...safeAreaInsets}>
      <View flex={1} justifyContent="space-between">
        <View flex={1}>
          <CustomHeader title="Account Discovery" />
          <SharedProgressbar value={60} sharedTransitionTag="sharedTag" />
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 24,
            }}
          >
            {Accounts.map((account) => {
              return (
                <AccountSelectionCard
                  key={account.id}
                  accountList={account.accountList}
                  bankLogo={account.bankLogo}
                  bankTitle={account.bankTitle}
                  selectedAccounts={selectedAccounts}
                  onAccountSelect={handleAccountSelect}
                />
              );
            })}
            <XStack
              marginVertical={24}
              gap={4}
              ai="center"
              justifyContent="center"
            >
              <BodyText size="sm" color="#6F6F6F">
                Couldn't find your bank?
              </BodyText>
              <HeadingText
                onPress={() => findOutWhyBottomSheetRef.current?.present()}
                size="sm"
                color="#035E5D"
              >
                Find out why
              </HeadingText>
            </XStack>
          </ScrollView>
        </View>
        <SaafeFooter>
          <YStack gap={12}>
            <BodyText textAlign="center" size="sm" color="#525252">
              Connect at least 1 of your banks to proceed
            </BodyText>
            <UnmzGradientButton
              disabled={selectedAccounts.length < 1}
              onPress={handleBottomSheetOpen}
            >
              Link Accounts
            </UnmzGradientButton>
          </YStack>
        </SaafeFooter>
        <AuthoriseBanksBottomSheet ref={bottomSheetRef} />
        <FindOutWhyBottomSheet ref={findOutWhyBottomSheetRef} />
      </View>
    </View>
  );
};

export const AccountDiscoveryScreen: UnmzNavScreen = {
  key: ACCOUNT_DISCOVERY_SCREEN_ID,
  title: "Account Discovery",
  content: _AccountDiscoveryScreen,
};
