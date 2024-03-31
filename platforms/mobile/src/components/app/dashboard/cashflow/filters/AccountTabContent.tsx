import {
  AccentText,
  SVGWrapper,
  ScrollView,
  XStack,
  YStack,
} from "@unmaze/views";
import { PlaceholderIcon } from "@unmaze/assets";
import { Checkbox } from "@unmaze/views/src/components/core/inputs/Checkbox";
import { Pressable } from "react-native";
import { banksList } from "../context/data";
import { BankListItemType } from "../context/utility.types";
import { CashflowContextActions } from "../context/cashflowContext.types";

type AccountTabContentProps = {
  bankAccounts: string[];
  dispatch: React.Dispatch<CashflowContextActions>;
};

export const AccountTabContent: React.FC<AccountTabContentProps> = ({
  bankAccounts,
  dispatch,
}) => {
  const isAllSelect = bankAccounts.length === banksList.length;

  const handleBankSelect = (checked: boolean, value: string) => {
    if (checked) {
      if (isAllSelect) {
        dispatch({ type: "REMOVE_ALL_BANK_ACCOUNTS" });
        dispatch({ type: "ADD_BANK_ACCOUNT", payload: { value: value } });
      } else {
        dispatch({
          type: "REMOVE_BANK_ACCOUNT",
          payload: { value: value },
        });
      }
    } else {
      dispatch({
        type: "ADD_BANK_ACCOUNT",
        payload: { value: value },
      });
    }
  };

  const handleAllSelect = () => {
    if (isAllSelect) {
      dispatch({ type: "REMOVE_ALL_BANK_ACCOUNTS" });
    } else {
      dispatch({
        type: "ADD_ALL_BANK_ACCOUNTS",
        payload: { bankAccounts: banksList.map((bank) => bank.value) },
      });
    }
  };

  return (
    <ScrollView flex={1} height={230} showsVerticalScrollIndicator={false}>
      <XStack
        paddingVertical={16}
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={1}
        borderBottomColor="#E7E7E7"
        onPress={handleAllSelect}
      >
        <XStack gap={12} alignItems="center">
          <SVGWrapper iconSVG={PlaceholderIcon} size="sm" />
          <AccentText size="sm">All Bank Accounts</AccentText>
        </XStack>
        <Checkbox checked={isAllSelect} />
      </XStack>
      {banksList.map((bank) => {
        const checked = bankAccounts.includes(bank.value);

        return (
          <Pressable
            key={bank.id}
            onPress={() => {
              handleBankSelect(checked, bank.value);
            }}
          >
            <BankFilterListItem
              checked={checked}
              icon={bank.icon}
              accountNumber={bank.accountNumber}
              title={bank.title}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

type BankFilterListItemProps = Omit<BankListItemType, "id" | "value"> & {
  checked: boolean;
};

const BankFilterListItem: React.FC<BankFilterListItemProps> = ({
  icon,
  title,
  checked,
  accountNumber,
}) => {
  const trimmedAccountNumber = "*" + accountNumber.slice(-4);
  return (
    <XStack
      paddingVertical={12}
      justifyContent="space-between"
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor="#E7E7E7"
    >
      <XStack gap={12} alignItems="center">
        <SVGWrapper iconSVG={icon} size="sm" />
        <YStack gap={4}>
          <AccentText size="sm">{title}</AccentText>
          <AccentText size="xs" color="#6F6F6F">
            {trimmedAccountNumber}
          </AccentText>
        </YStack>
      </XStack>
      <Checkbox checked={checked} />
    </XStack>
  );
};
