import { Text, View, XStack, YStack } from "@unmaze/views";
import { ChevronRight, PlaceholderIcon } from "@unmaze/assets";
import {
  getFormattedAccountNumber,
  getFormattedAmount,
  getFormattedLinkedDateAndTime,
} from "./linkedAccountHelpers";

export const LinkedAccountsAccordionContentItem = ({ account }) => {
  return (
    <View
      key={account.id}
      padding={12}
      bg="#fff"
      borderRadius={12}
      elevationAndroid={2}
    >
      <XStack alignItems="center" gap={12}>
        <PlaceholderIcon />
        <YStack flex={1} gap={2}>
          <Text fontWeight={"500"} color="#262626">
            {account.type}
          </Text>
          <Text fontSize={12} fontWeight={"500"} color="#6F6F6F">
            {getFormattedAccountNumber(account.accountNumber)}
          </Text>
        </YStack>
        {account.isLinked ? (
          <YStack gap={2}>
            <Text
              fontSize={12}
              fontWeight="500"
              alignSelf="flex-end"
              letterSpacing={0.24}
              color="#262626"
            >
              {getFormattedAmount(account.amount)}
            </Text>
            <Text fontSize={12} letterSpacing={0.24} color="#6F6F6F">
              {getFormattedLinkedDateAndTime(account.linkedDateAndTime)}
            </Text>
          </YStack>
        ) : (
          <XStack alignItems="center" gap={2}>
            <Text
              fontSize={12}
              fontWeight={"600"}
              color="#08BDBA"
              alignSelf="center"
            >
              Link Now
            </Text>
            <View mt={2}>
              <ChevronRight width={16} height={16} />
            </View>
          </XStack>
        )}
      </XStack>
    </View>
  );
};
