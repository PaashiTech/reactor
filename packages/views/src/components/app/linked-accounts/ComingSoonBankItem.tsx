import { Text, ViewProps, XStack } from "tamagui";
import { UnmzCard } from "../../core/cards/UnmzCard";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { Bell, ChevronRight, SvgProps } from "@unmaze/assets";
import { useState } from "react";
import { NotifyBell } from "@unmaze/assets/icons";

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
        <Text>{bank.title}</Text>
      </XStack>
      {!notifiedCliked ? (
        <XStack gap={2} alignItems="center">
          <Text
            color="#08BDBA"
            fontSize={12}
            fontWeight={"600"}
            onPress={() => setNotifiedClicked(!notifiedCliked)}
          >
            Notify Me
          </Text>

          <SVGWrapper svgColor="#08BDBA" iconSVG={ChevronRight} size="sm" />
        </XStack>
      ) : (
        <NotifyBell />
      )}
    </UnmzCard>
  );
};
