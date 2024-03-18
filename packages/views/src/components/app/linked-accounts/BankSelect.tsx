import { ViewStyle } from "@tamagui/core";
import { SvgProps } from "@unmaze/assets";
import { Text, XStack } from "tamagui";
import { Checkbox } from "../../core/inputs/Checkbox";
import { UnmzCard } from "../../core/cards/UnmzCard";

interface BankSelectProps extends ViewStyle {
  bank: {
    id: number;
    title: string;
    logo: React.FC<SvgProps>;
  };
  checked: boolean;
  handleSelectedBanks: (bankTitle: string) => void;
}

export const BankSelect: React.FC<BankSelectProps> = ({
  bank,
  checked,
  handleSelectedBanks,
}) => {
  const Logo = bank.logo;
  return (
    <UnmzCard
      padding={16}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      onPress={() => handleSelectedBanks(bank.title)}
    >
      <XStack gap={12}>
        <Logo width={20} height={20} />
        <Text
          fontSize={14}
          fontWeight={"500"}
          letterSpacing={0.24}
          textAlign="center"
        >
          {bank.title}
        </Text>
      </XStack>
      <Checkbox checked={checked} />
    </UnmzCard>
  );
};
