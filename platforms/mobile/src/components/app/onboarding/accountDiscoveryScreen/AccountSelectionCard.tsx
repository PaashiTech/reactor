import {
  AccentText,
  BodyText,
  SVGWrapper,
  Separator,
  ShadowWrapper,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import { SvgProps } from "@unmaze/assets";
import React from "react";
import { Checkbox } from "@unmaze/views/src/components/core/inputs/Checkbox";

type AccountListType = {
  id: number;
  accountNumber: string;
  accountType: string;
}[];

type AccountSelectionCardProps = {
  bankLogo: React.FC<SvgProps>;
  bankTitle: string;
  accountList: AccountListType;
  selectedAccounts: string[];
  onAccountSelect: (accountNumber: string) => void;
};

export const AccountSelectionCard: React.FC<AccountSelectionCardProps> = ({
  bankLogo,
  bankTitle,
  accountList,
  selectedAccounts,
  onAccountSelect,
}) => {
  const numberOfAccounts = accountList.length;
  return (
    <View mt={24}>
      <ShadowWrapper size="sm">
        <View bg="#FFF" borderRadius={16}>
          <XStack p={16} gap={12} ai="center">
            <SVGWrapper iconSVG={bankLogo} />
            <YStack>
              <AccentText>{bankTitle}</AccentText>
              <BodyText size="sm">
                {numberOfAccounts} accounts selected
              </BodyText>
            </YStack>
          </XStack>
          <Separator borderColor="#E7E7E7" />
          <YStack paddingVertical={8}>
            {accountList.map((account) => {
              return (
                <XStack
                  key={account.id}
                  gap={3}
                  paddingHorizontal={16}
                  paddingVertical={8}
                  alignItems="center"
                  onPress={() => onAccountSelect(account.accountNumber)}
                >
                  <XStack gap={4}>
                    <AccentText size="sm" color="#6F6F6F">
                      *{account.accountNumber.slice(-4)}
                    </AccentText>
                    <AccentText size="sm" color="#6F6F6F">
                      |
                    </AccentText>
                    <AccentText size="sm" color="#6F6F6F">
                      {account.accountType}
                    </AccentText>
                  </XStack>
                  <View ml="auto">
                    <Checkbox
                      checked={selectedAccounts.includes(account.accountNumber)}
                    />
                  </View>
                </XStack>
              );
            })}
          </YStack>
        </View>
      </ShadowWrapper>
    </View>
  );
};
