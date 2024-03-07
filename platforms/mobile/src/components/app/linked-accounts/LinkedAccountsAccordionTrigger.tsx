import { Progress, Square, Text, View, XStack, YStack } from "@unmaze/views";
import { ChevronDown, PlaceholderIcon } from "@unmaze/assets";
import {
  getLinkedAccountText,
  getProgressPercent,
} from "./linkedAccountHelpers";

type LinkedAccountsAccordionTriggerProps = {
  open: boolean;
  item: any;
};

export const LinkedAccountsAccordionTrigger: React.FC<
  LinkedAccountsAccordionTriggerProps
> = ({ open, item }) => {
  return (
    <View borderRadius={12} overflow="hidden">
      <View padding={16} bg="#fff">
        <XStack alignItems="center" gap={12}>
          <PlaceholderIcon />
          <YStack flex={1} gap={2}>
            <Text fontWeight={"500"} color="#262626">
              {item.name}
            </Text>
            <Text fontSize={12} fontWeight={"500"} color="#6F6F6F">
              {getLinkedAccountText(item.accounts)}
            </Text>
          </YStack>
          <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
            <ChevronDown size="$1" />
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
  );
};
