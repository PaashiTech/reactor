import { FC } from "react";
import {
  AccentText,
  BodyText,
  HeadingText,
  SVGWrapper,
  View,
  XStack,
} from "@unmaze/views";
import { ChevronRight } from "@unmaze/assets";

type HelpUsImproveProps = {};

export const HelpUsImprove: FC<HelpUsImproveProps> = () => {
  // TODO: Use global state variables instead of these
  const nUncategorizedTxns = 34;
  const nUncategorizedTxnsWorth = 3560;

  return (
    <View
      mt={20}
      borderRadius={16}
      overflow="hidden"
      borderColor="#9EF0F0"
      borderWidth={1}
      borderStyle="solid"
      backgroundColor="#FFF"
    >
      <View padding={16} gap={4}>
        <HeadingText>Help us improve your spend insights</HeadingText>
        <BodyText color="#6F6F6F" size="sm">
          Found <BodyText color="#262626">{nUncategorizedTxns}</BodyText>{" "}
          uncategorized transactions worth{" "}
          <BodyText color="#262626">₹{nUncategorizedTxnsWorth}</BodyText>
        </BodyText>
      </View>
      <XStack
        gap={4}
        paddingHorizontal={16}
        paddingVertical={12}
        borderTopWidth={1}
        borderTopColor="#9EF0F0"
        backgroundColor="#EBFFFF"
        onPress={() => {
          alert("Categorize here!");
        }}
      >
        <AccentText size="sm" fontWeight="700">
          Categorize now
        </AccentText>
        <SVGWrapper svgColor="#009D9A" iconSVG={ChevronRight} size="sm" />
      </XStack>
    </View>
  );
};
