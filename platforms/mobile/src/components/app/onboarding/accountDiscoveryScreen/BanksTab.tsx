import React from "react";
import {
  BodyText,
  HeadingText,
  ScrollView,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import { accounts } from "../constants";
import { useWindowDimensions } from "react-native";
import { AccountSelectionCard } from "./AccountSelectionCard";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

type BanksTabProps = {
  selectedAccounts: string[];
  onAccountSelect: (accountNumber: string) => void;
  findOutWhyBottomSheetRef: React.RefObject<BottomSheetModalMethods>;
};

export const BanksTab: React.FC<BanksTabProps> = ({
  selectedAccounts,
  findOutWhyBottomSheetRef,
  onAccountSelect,
}) => {
  const { width } = useWindowDimensions();

  const totalBankAccounts = accounts.reduce(
    (acc, curr) => acc + curr.accountList.length,
    0
  );
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20, width: width }}>
      <YStack mt={20} gap={4}>
        <HeadingText size="lg">
          Select the accounts you want to link.
        </HeadingText>
        <BodyText>{totalBankAccounts} bank accounts discovered</BodyText>
      </YStack>
      {accounts.map((account) => {
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
