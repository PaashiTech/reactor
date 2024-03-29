import { ViewStyle } from "@tamagui/core";
import { SvgProps } from "@unmaze/assets";
import DropShadow from "react-native-drop-shadow";
import { Text, View } from "tamagui";
import { Checkbox } from "../../core/inputs/Checkbox";
import { AccentText } from "../../core/typography/AccentText";

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
    <DropShadow
      style={{
        shadowColor: "#21272a",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        flexGrow: 1,
        flexBasis: "30%",
      }}
      key={bank.id}
    >
      <View
        paddingHorizontal={12}
        paddingVertical={20}
        gap={12}
        alignItems="center"
        borderRadius={12}
        flexGrow={1}
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
    </DropShadow>
  );
};
