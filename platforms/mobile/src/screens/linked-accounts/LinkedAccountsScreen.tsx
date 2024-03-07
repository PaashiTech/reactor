import { LinkedAccountsScreenProps, LINKED_ACCOUNTS_SCREEN_ID } from "./types";
import {
  UnmzGradientButton,
  View,
  Text,
  ScrollView,
  XStack,
  Accordion,
  Square,
  YStack,
  Progress,
} from "@unmaze/views";

import {
  Plus,
  SaafeLogo,
  ChevronDown,
  ChevronRight,
  PlaceholderIcon,
} from "@unmaze/assets";
import { UnmzNavScreen } from "../types";
import { linkedAccountsData } from "./linkedAccountsData";

const _LinkedAccountsScreen: React.FC<LinkedAccountsScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View flex={1} jc="space-between">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View marginTop={24} paddingHorizontal={20} gap={2}>
          <XStack justifyContent="space-between">
            <Text
              fontSize={16}
              fontWeight={"600"}
              letterSpacing={0.32}
              color="#262626"
              lineHeight={20}
            >
              All Accounts
            </Text>
            <Text
              fontSize={16}
              fontWeight={"600"}
              letterSpacing={0.32}
              color="#262626"
              lineHeight={20}
            >
              35.67L
            </Text>
          </XStack>
          <Text fontSize={12} letterSpacing={0.24} color="#6F6F6F">
            via RBI's Account Aggregator
          </Text>
        </View>
        <View marginTop={20} paddingHorizontal={20}>
          <Accordion width="100%" type="multiple" gap={16}>
            {linkedAccountsData.map((item) => {
              return (
                <Accordion.Item value={item.name} key={item.id}>
                  <Accordion.Trigger unstyled>
                    {({ open }) => (
                      <View borderRadius={12} overflow="hidden">
                        <View padding={16} bg="#fff">
                          <XStack alignItems="center" gap={12}>
                            <PlaceholderIcon />
                            <YStack flex={1} gap={2}>
                              <Text fontWeight={"500"} color="#262626">
                                {item.name}
                              </Text>
                              <Text
                                fontSize={12}
                                fontWeight={"500"}
                                color="#6F6F6F"
                              >
                                2 out of 3 accounts linked
                              </Text>
                            </YStack>
                            <Square
                              animation="quick"
                              rotate={open ? "180deg" : "0deg"}
                            >
                              <ChevronDown size="$1" />
                            </Square>
                          </XStack>
                        </View>
                        <Progress
                          height={4}
                          value={66}
                          backgroundColor="#EBFFFF"
                        >
                          <Progress.Indicator
                            animation="medium"
                            backgroundColor="#08BDBA"
                          />
                        </Progress>
                      </View>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content
                    unstyled
                    marginVertical={12}
                    gap={8}
                    paddingHorizontal={6}
                  >
                    {item.accounts.map((account) => {
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
                              <Text
                                fontSize={12}
                                fontWeight={"500"}
                                color="#6F6F6F"
                              >
                                {"*" + account.accountNumber.slice(-4)}
                              </Text>
                            </YStack>
                            {account.amount ? (
                              <YStack gap={2}>
                                <Text
                                  fontSize={12}
                                  fontWeight="500"
                                  alignSelf="flex-end"
                                  letterSpacing={0.24}
                                  color="#262626"
                                >
                                  {"₹" +
                                    (account.amount / 1_00_000).toFixed(2) +
                                    "L"}
                                </Text>
                                <Text
                                  fontSize={12}
                                  letterSpacing={0.24}
                                  color="#6F6F6F"
                                >
                                  Today • 5:45pm
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
                    })}
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </View>
      </ScrollView>
      <View
        paddingHorizontal={20}
        paddingVertical={16}
        gap={12}
        bg="#fff"
        elevationAndroid={2}
      >
        <UnmzGradientButton icon={Plus}>Add Account</UnmzGradientButton>
        <XStack gap={8} alignSelf="center">
          <Text fontSize={10} color="#6F6F6F">
            Powered by RBI's Account Aggregator
          </Text>
          <SaafeLogo />
        </XStack>
      </View>
    </View>
  );
};

export const LinkedAccountsScreen: UnmzNavScreen = {
  key: LINKED_ACCOUNTS_SCREEN_ID,
  title: "Linked Accounts",
  content: _LinkedAccountsScreen,
};
