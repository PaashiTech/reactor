import React from "react";
import {
  BodyText,
  HeadingText,
  ShadowWrapper,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import {
  accounts,
  investments,
} from "../../components/app/onboarding/constants";
import { useWindowDimensions } from "react-native";
import { AccountSelectionCard } from "../../components/app/onboarding/accountDiscoveryScreen/AccountSelectionCard";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ScrollView } from "react-native-gesture-handler";

type InvestmentsTabProps = {
  selectedAccounts: string[];
  onAccountSelect: (accountNumber: string) => void;
  findOutWhyBottomSheetRef: React.RefObject<BottomSheetModalMethods>;
};

export const InvestmentsTab: React.FC<InvestmentsTabProps> = ({
  selectedAccounts,
  findOutWhyBottomSheetRef,
  onAccountSelect,
}) => {
  const { width } = useWindowDimensions();

  const totalInvestmentAccounts = investments.reduce(
    (acc, curr) => acc + curr.accountList.length,
    0
  );

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20, width: width }}>
      <YStack mt={20} gap={4}>
        <HeadingText size="lg">
          Select the financial entities which hold your Investment & Securities
          accounts.
        </HeadingText>
        <BodyText>{totalInvestmentAccounts} accounts discovered</BodyText>
      </YStack>
      {investments.map((account) => {
        return (
          <AccountSelectionCard
            key={account.id}
            accountList={account.accountList}
            bankLogo={account.bankLogo}
            bankTitle={account.bankTitle}
            selectedAccounts={selectedAccounts}
            onAccountSelect={onAccountSelect}
          />
        );
      })}
      <View marginTop={24}>
        <ShadowWrapper size="sm">
          <View
            paddingHorizontal={16}
            paddingVertical={12}
            bg="#EBFFFF"
            borderRadius={12}
          >
            <HeadingText size="sm">
              NOTE: You can only link Demat accounts that are actively used for
              trading and still holding investments within the past year.
            </HeadingText>
          </View>
        </ShadowWrapper>
      </View>
      <XStack marginVertical={24} gap={4} ai="center" justifyContent="center">
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
  );
};
