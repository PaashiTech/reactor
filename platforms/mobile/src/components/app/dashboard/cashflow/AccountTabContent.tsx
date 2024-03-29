import {
  AccentText,
  SVGWrapper,
  ScrollView,
  XStack,
  YStack,
} from "@unmaze/views";
import {
  PlaceholderIcon,
  SbiBankLogo,
  ICICIBankLogo,
  CanaraBankLogo,
  AxisBankLogo,
  BOBBankLogo,
  SvgProps,
} from "@unmaze/assets";
import { Checkbox } from "@unmaze/views/src/components/core/inputs/Checkbox";
import { useCashflowContext } from "./context/CashflowContextProvider";
import { Pressable } from "react-native";

type BankListItemType = {
  id: number;
  value: string;
  title: string;
  accountNumber: string;
  icon: React.FC<SvgProps>;
};

const banksList: BankListItemType[] = [
  {
    id: 1,
    value: "HDFC_BANK",
    title: "HDFC Bank",
    accountNumber: "1234567894567",
    icon: ICICIBankLogo,
  },
  {
    id: 2,
    value: "CANARA_BANK",
    title: "Canara Bank",
    accountNumber: "1234567894567",
    icon: CanaraBankLogo,
  },
  {
    id: 3,
    value: "AXIS_BANK",
    title: "Axis Bank",
    accountNumber: "1234567894567",
    icon: AxisBankLogo,
  },
  {
    id: 4,
    value: "SBI_BANK",
    title: "SBI Bank",
    accountNumber: "1234567894567",
    icon: SbiBankLogo,
  },
  {
    id: 5,
    value: "BOB_BANK",
    title: "BOB Bank",
    accountNumber: "1234567894567",
    icon: BOBBankLogo,
  },
];

export const AccountTabContent = () => {
  const {
    state: {
      appliedFilters: { bankAccounts },
    },
    dispatch,
  } = useCashflowContext();

  const handleBankSelect = (checked: boolean, value: string) => {
    if (checked) {
      dispatch({
        type: "REMOVE_BANK_ACCOUNT",
        payload: { value: value },
      });
    } else {
      dispatch({
        type: "ADD_BANK_ACCOUNT",
        payload: { value: value },
      });
    }
  };

  const isAllSelect = bankAccounts.length === banksList.length;

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
