import { ViewProps, XStack } from "tamagui";
import { UnmzCard } from "../../core/cards/UnmzCard";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { Bell, ChevronRight, SvgProps } from "@unmaze/assets";
import { useState } from "react";
import { NotifyBell } from "@unmaze/assets/icons";
import { HeadingText } from "../../core/typography/HeadingText";
import { LabelText } from "../../core/typography/LabelText";
import { AccentText } from "../../core/typography/AccentText";

type ComingSoonBankItemProps = ViewProps & {
  bank: {
    id: number;
    title: string;
    logo: React.FC<SvgProps>;
  };
};

export const ComingSoonBankItem: React.FC<ComingSoonBankItemProps> = ({
  bank,
  ...props
}) => {
  const [notifiedCliked, setNotifiedClicked] = useState<boolean>(false);
  const Logo = bank.logo;
  return (
    <UnmzCard
      key={bank.id}
      padding={16}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <XStack gap={12} alignItems="center">
        <Logo width={20} height={20} />
        <AccentText>{bank.title}</AccentText>
      </XStack>
      {!notifiedCliked ? (
        <XStack gap={2} alignItems="center">
          <HeadingText
            size="sm"
            color="#08BDBA"
            onPress={() => setNotifiedClicked(!notifiedCliked)}
          >
            Notify Me
          </HeadingText>

          <SVGWrapper svgColor="#08BDBA" iconSVG={ChevronRight} size="sm" />
        </XStack>
      ) : (
        <NotifyBell />
      )}
    </UnmzCard>
  );
};
