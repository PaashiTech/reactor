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
import {
  Filter,
  ChevronRight,
  HDFCBankLogo,
  SbiBankLogo,
  CanaraBankLogo,
  AxisBankLogo,
  BOBBankLogo,
} from "@unmaze/assets";
import { CashflowAreaChart } from "../../components/app/dashboard/cashflow/CashflowAreaChart";
import { BankAccountChip } from "../../components/app/dashboard/cashflow/BankAccountChip";
import { HelpUsImprove } from "../../components/app/dashboard/HelpUsImprove";
import { CategoryList } from "../../components/app/dashboard/cashflow/CategoryList";

type CashflowProps = {
  openFilters: () => void;
};

export const Cashflow: React.FC<CashflowProps> = ({ openFilters }) => {
  // TODO - Use value from global store
  const bankBalance = 45.89;

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
              Last 30 days
            </BodyText>

            <BodyText size="sm" color="#525252">
              ·
            </BodyText>

            {/**
             * Text if all banks selected in filters
             */}

            {/* <BodyText size="sm" color="#525252">
              All bank accounts
            </BodyText> */}
          </XStack>

          {/**
           * Banks accounts chips if NOT all banks selected
           * in filters
           */}

          <BankAccountChip
            accountNumber="12346789454567"
            bankLogo={HDFCBankLogo}
          />

          <BankAccountChip
            accountNumber="12346789451234"
            bankLogo={SbiBankLogo}
          />
          <BankAccountChip
            accountNumber="12346789454567"
            bankLogo={CanaraBankLogo}
          />

          <BankAccountChip
            accountNumber="12346789454567"
            bankLogo={AxisBankLogo}
          />

          <BankAccountChip
            accountNumber="12346789451234"
            bankLogo={BOBBankLogo}
          />
          <BankAccountChip
            accountNumber="12346789454567"
            bankLogo={SbiBankLogo}
          />
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
