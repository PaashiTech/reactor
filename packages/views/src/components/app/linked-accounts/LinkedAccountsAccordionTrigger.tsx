import { Progress, Square, View, XStack, YStack } from "tamagui";
import { ChevronDown, PlaceholderIcon } from "@unmaze/assets";
import {
  getLinkedAccountText,
  getProgressPercent,
} from "../../../helpers/linkedAccountHelpers";
import DropShadow from "react-native-drop-shadow";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { AccentText } from "../../core/typography/AccentText";

type LinkedAccountsAccordionTriggerProps = {
  open: boolean;
  item: any;
};

export const LinkedAccountsAccordionTrigger: React.FC<
  LinkedAccountsAccordionTriggerProps
> = ({ open, item }) => {
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
      }}
    >
      <View borderRadius={12} overflow="hidden" backgroundColor={"#fff"}>
        <View padding={16}>
          <XStack alignItems="center" gap={12}>
            <PlaceholderIcon />
            <YStack flex={1} gap={2}>
              <AccentText color="#262626">{item.name}</AccentText>
              <AccentText size="sm" color="#6F6F6F">
                {getLinkedAccountText(item.accounts)}
              </AccentText>
            </YStack>
            <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
              <SVGWrapper iconSVG={ChevronDown} size="lg" />
            </Square>
          </XStack>
        </View>
        <Progress
          height={4}
          value={getProgressPercent(item.accounts)}
          backgroundColor="#EBFFFF"
        >
          <Progress.Indicator animation="medium" backgroundColor="#08BDBA" />
        </Progress>
      </View>
    </DropShadow>
  );
};
