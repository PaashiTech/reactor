import {
  BodyText,
  HeadingText,
  ScrollView,
  UnmzGradientButton,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  AccountDiscoveryScreenProps,
  SELECT_BANKS_SCREEN_ID,
} from "./types";
import { useEffect, useState } from "react";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { AccountSelectionCard } from "../../components/app/onboarding/AccountSelectionCard";
import { Accounts } from "../../components/app/onboarding/constants";

const _AccountDiscoveryScreen: React.FC<AccountDiscoveryScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate(SELECT_BANKS_SCREEN_ID); // Navigate to your desired screen
    });
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

  console.log(selectedAccounts);

  return (
    <View flex={1}>
      <View flex={1} justifyContent="space-between">
        <View flex={1}>
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
              <HeadingText size="sm" color="#035E5D">
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
            <UnmzGradientButton disabled={selectedAccounts.length < 1}>
              Link Accounts
            </UnmzGradientButton>
          </YStack>
        </SaafeFooter>
      </View>
    </View>
  );
};

export const AccountDiscoveryScreen: UnmzNavScreen = {
  key: ACCOUNT_DISCOVERY_SCREEN_ID,
  title: "Account Discovery",
  content: _AccountDiscoveryScreen,
};
