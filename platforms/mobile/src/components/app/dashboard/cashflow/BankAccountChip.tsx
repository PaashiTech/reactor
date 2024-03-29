import { BodyText, SVGWrapper, ViewProps, XStack } from "@unmaze/views";
import { SvgProps } from "@unmaze/assets";

type BankAccountChipProps = {
  bankLogo: React.FC<SvgProps>;
  accountNumber: string;
} & ViewProps;

export const BankAccountChip: React.FC<BankAccountChipProps> = ({
  bankLogo,
  accountNumber,
  ...props
}) => {
  const lastFourDigits = accountNumber.slice(-4);
  return (
    <XStack gap={4} alignItems="center" {...props}>
      <SVGWrapper iconSVG={bankLogo} size="sm" />
      <BodyText size="sm">{lastFourDigits}</BodyText>
    </XStack>
  );
};
