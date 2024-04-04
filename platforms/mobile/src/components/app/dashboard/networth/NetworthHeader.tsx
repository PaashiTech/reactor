import { useState } from "react";
import { EyeVisible, EyeHidden } from "@unmaze/assets";
import {
  BodyText,
  HeadingText,
  IconButton,
  View,
  XStack,
  formatNetWorth,
  getFormattedDateAndTime,
} from "@unmaze/views";

export const NetworthHeader = () => {
  const [showAmount, setShowAmount] = useState<boolean>(false);

  // Change this to actual networth value from store
  const netWorth = 10_45_462.5645;

  // Change this to the actual time when the user last fetched the networth
  const netWorthFetchedDate = new Date();

  const formattedNetWorth = formatNetWorth(netWorth);

  return (
    <View mt={32} gap={4}>
      <XStack gap={8} alignItems="center">
        <HeadingText size="xl">
          {showAmount ? formattedNetWorth : "₹ ······ "}
        </HeadingText>

        <IconButton
          onPress={() => setShowAmount((prev) => !prev)}
          icon={showAmount ? EyeVisible : EyeHidden}
        />
      </XStack>
      <XStack gap={4}>
        <BodyText size="sm">Networth</BodyText>
        <BodyText size="sm">·</BodyText>
        <BodyText size="sm">
          {getFormattedDateAndTime(netWorthFetchedDate)}
        </BodyText>
      </XStack>
    </View>
  );
};
