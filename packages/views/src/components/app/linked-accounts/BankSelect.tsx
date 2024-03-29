import { ViewStyle } from "@tamagui/core";
import { SvgProps } from "@unmaze/assets";
import { XStack } from "tamagui";
import { Checkbox } from "../../core/inputs/Checkbox";
import { UnmzCard } from "../../core/cards/UnmzCard";
import { AccentText } from "../../core/typography/AccentText";

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
        <AccentText textAlign="center">{bank.title}</AccentText>
      </XStack>
      <Checkbox checked={checked} />
    </UnmzCard>
  );
};
