import { ViewStyle } from "@tamagui/core";
import { SvgProps } from "@unmaze/assets";
import { View } from "tamagui";
import { Checkbox } from "../../core/inputs/Checkbox";
import { AccentText } from "../../core/typography/AccentText";
import { ShadowWrapper } from "../../core/shadow/ShadowWrapper";

interface PopularBanksSelectProps extends ViewStyle {
  bank: {
    id: number;
    title: string;
    logo: React.FC<SvgProps>;
  };
  checked: boolean;
  handleSelectedBanks: (bankTitle: string) => void;
}

export const PopularBanksSelect: React.FC<PopularBanksSelectProps> = ({
  bank,
  checked,
  handleSelectedBanks,
}) => {
  const Logo = bank.logo;
  return (
    <View flexGrow={1} flexBasis="30%">
      <ShadowWrapper flex={1} size="sm" key={bank.id}>
        <View
          flex={1}
          paddingHorizontal={12}
          paddingVertical={20}
          gap={12}
          alignItems="center"
          borderRadius={12}
          backgroundColor="#fff"
          position="relative"
          onPress={() => handleSelectedBanks(bank.title)}
        >
          <View position="absolute" top={8} right={8}>
            <Checkbox checked={checked} borderHidden />
          </View>
          <Logo width={32} height={32} />
          <AccentText size="sm" textAlign="center">
            {bank.title}
          </AccentText>
        </View>
      </ShadowWrapper>
    </View>
  );
};
