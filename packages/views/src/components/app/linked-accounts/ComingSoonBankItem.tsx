import { ViewProps, XStack } from "tamagui";
import { UnmzCard } from "../../core/cards/UnmzCard";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { NotifyBell, ChevronRight, SvgProps } from "@unmaze/assets";
import { useState } from "react";
import { HeadingText } from "../../core/typography/HeadingText";
import { AccentText } from "../../core/typography/AccentText";

import { useToastController } from "@tamagui/toast";

type ComingSoonBankItemProps = ViewProps & {
  bank: {
    id: number;
    title: string;
    logo: React.FC<SvgProps>;
  };
  showNotifyToast?: boolean;
};

export const ComingSoonBankItem: React.FC<ComingSoonBankItemProps> = ({
  bank,
  showNotifyToast,
  ...props
}) => {
  const [notifiedCliked, setNotifiedClicked] = useState<boolean>(false);
  const toast = useToastController();
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
            onPress={() => {
              if (showNotifyToast) {
                toast.show(
                  "We'll notify you when " + bank.title + " is live on Unmaze",
                  {}
                );
              }
              setNotifiedClicked(!notifiedCliked);
            }}
          >
            Notify Me
          </HeadingText>

          <SVGWrapper svgColor="#08BDBA" iconSVG={ChevronRight} size="sm" />
        </XStack>
      ) : (
        <SVGWrapper svgColor="#08BDBA" iconSVG={NotifyBell} size="md" />
      )}
    </UnmzCard>
  );
};
