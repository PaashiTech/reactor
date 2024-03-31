import {
  BodyText,
  HeadingText,
  IconButton,
  SVGWrapper,
  Separator,
  ShadowWrapper,
  View,
  XStack,
  formatNetWorth,
} from "@unmaze/views";
import { Filter, ChevronRight } from "@unmaze/assets";
import { CashflowAreaChart } from "../../components/app/dashboard/cashflow/CashflowAreaChart";
import { BankAccountChip } from "../../components/app/dashboard/cashflow/BankAccountChip";
import { HelpUsImprove } from "../../components/app/dashboard/cashflow/HelpUsImprove";
import { CategoryList } from "../../components/app/dashboard/cashflow/CategoryList";
import { useCashflowContext } from "../../components/app/dashboard/cashflow/context/CashflowContextProvider";
import { banksList } from "../../components/app/dashboard/cashflow/context/data";

type CashflowProps = {
  openFilters: () => void;
};

export const Cashflow: React.FC<CashflowProps> = ({ openFilters }) => {
  const {
    state: {
      appliedFilters: { bankAccounts, duration },
    },
  } = useCashflowContext();

  // TODO - Use value from global store
  const bankBalance = 45.89;

  const selectedDuration =
    duration === "LAST_30_DAYS" ? "Last 30 Days" : "Monthly";

  const isAllSelected = bankAccounts.length === banksList.length;

  const selectedBankAccounts = banksList.filter((bank) =>
    bankAccounts.includes(bank.value)
  );

  return (
    <>
      <View mt={32}>
        <XStack justifyContent="space-between">
          <HeadingText size="lg">Cashflow</HeadingText>
          <IconButton icon={Filter} onPress={openFilters} />
        </XStack>
        <XStack columnGap={8} rowGap={4} flexWrap="wrap" pr={8}>
          {/**
           * Duration value from filters
           */}
          <XStack gap={4}>
            <BodyText size="sm" color="#525252">
              {selectedDuration}
            </BodyText>

            <BodyText size="sm" color="#525252">
              ·
            </BodyText>

            {/**
             * Text if all banks selected in filters
             */}

            {isAllSelected && (
              <BodyText size="sm" color="#525252">
                All bank accounts
              </BodyText>
            )}
          </XStack>

          {/**
           * Banks accounts chips if NOT all banks selected
           * in filters
           */}

          {!isAllSelected &&
            selectedBankAccounts.map((bank) => (
              <BankAccountChip
                key={bank.id}
                accountNumber={bank.accountNumber}
                bankLogo={bank.icon}
              />
            ))}
        </XStack>
      </View>
      <ShadowWrapper size="sm">
        <View mt={20} bg={"#FFF"} borderRadius={12} overflow="hidden">
          <XStack p={16} justifyContent="space-between" alignItems="center">
            <HeadingText>Bank Balances</HeadingText>
            <XStack alignItems="center" gap={6}>
              <HeadingText>{formatNetWorth(bankBalance)}</HeadingText>
              <SVGWrapper iconSVG={ChevronRight} size="sm" svgColor="#08BDBA" />
            </XStack>
          </XStack>
          <Separator borderColor={"#E7E7E7"} />
          <CashflowAreaChart />
        </View>
      </ShadowWrapper>
      <HelpUsImprove />
      <CategoryList />
    </>
  );
};
