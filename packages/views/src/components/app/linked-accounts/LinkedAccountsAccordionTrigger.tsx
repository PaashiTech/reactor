import { Progress, Square, View, XStack, YStack } from "tamagui";
import { ChevronDown, PlaceholderIcon } from "@unmaze/assets";
import {
  getLinkedAccountText,
  getProgressPercent,
} from "../../../helpers/linkedAccountHelpers";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { AccentText } from "../../core/typography/AccentText";
import { ShadowWrapper } from "../../core/shadow/ShadowWrapper";

type LinkedAccountsAccordionTriggerProps = {
  open: boolean;
  item: any;
};

export const LinkedAccountsAccordionTrigger: React.FC<
  LinkedAccountsAccordionTriggerProps
> = ({ open, item }) => {
  return (
    <View borderRadius={12} overflow="hidden" backgroundColor={"#fff"}>
      <View padding={16}>
        <XStack alignItems="center" gap={12}>
          <SVGWrapper iconSVG={PlaceholderIcon} size="md" />

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
        <Progress.Indicator animation="medium" backgroundColor="#035E5D" />
      </Progress>
    </View>
  );
};
