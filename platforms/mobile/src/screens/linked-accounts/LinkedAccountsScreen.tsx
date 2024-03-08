import { LinkedAccountsScreenProps, LINKED_ACCOUNTS_SCREEN_ID } from "./types";
import {
  UnmzGradientButton,
  View,
  Text,
  ScrollView,
  XStack,
  Accordion,
  LinkedAccountsAccordionTrigger,
  LinkedAccountsAccordionContentItem,
  getAllAccountsAmount,
} from "@unmaze/views";
import { Plus, SaafeLogo } from "@unmaze/assets";
import { UnmzNavScreen } from "../types";
import { linkedAccountsData } from "./linkedAccountsData";
import DropShadow from "react-native-drop-shadow";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";

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
              {getAllAccountsAmount(linkedAccountsData)}
            </Text>
          </XStack>
          <Text fontSize={12} letterSpacing={0.24} color="#6F6F6F">
            via RBI's Account Aggregator
          </Text>
        </View>
        <View padding={20}>
          <Accordion width="100%" type="multiple" gap={16}>
            {linkedAccountsData.map((item) => {
              const listRef = useAnimatedRef();
              const heightValue = useSharedValue(0);
              const [isOpen, setIsOpen] = useState(false);

              const heightAnimationStyle = useAnimatedStyle(() => ({
                height: heightValue.value,
              }));

              return (
                <Accordion.Item
                  value={item.name}
                  key={item.id}
                  overflow="hidden"
                >
                  <Accordion.Trigger
                    unstyled
                    onPress={() => {
                      if (isOpen) {
                        heightValue.value = withTiming(0);
                      }
                      setIsOpen(!isOpen);
                    }}
                  >
                    {({ open }) => (
                      <LinkedAccountsAccordionTrigger
                        key={item.id}
                        open={open}
                        item={item}
                      />
                    )}
                  </Accordion.Trigger>

                  <Accordion.Content unstyled>
                    <Animated.View style={heightAnimationStyle}>
                      <Animated.View
                        style={{
                          marginVertical: 12,
                          gap: 8,
                          paddingHorizontal: 6,
                          position: "absolute",
                          top: 0,
                          width: "100%",
                        }}
                        ref={listRef}
                        onLayout={(e) => {
                          if (isOpen) {
                            heightValue.value = withTiming(
                              e.nativeEvent.layout.height + 12
                            );
                          }
                        }}
                      >
                        {item.accounts.map((account) => {
                          return (
                            <LinkedAccountsAccordionContentItem
                              key={account.id}
                              account={account}
                              type={account.isLinked ? "info" : "link"}
                            />
                          );
                        })}
                      </Animated.View>
                    </Animated.View>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </View>
      </ScrollView>
      <DropShadow
        style={{
          shadowColor: "#21272a",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        }}
      >
        <View paddingHorizontal={20} paddingVertical={16} gap={12} bg="#fff">
          <UnmzGradientButton icon={Plus}>Add Account</UnmzGradientButton>
          <XStack gap={8} alignSelf="center">
            <Text fontSize={10} color="#6F6F6F">
              Powered by RBI's Account Aggregator
            </Text>
            <SaafeLogo />
          </XStack>
        </View>
      </DropShadow>
    </View>
  );
};

export const LinkedAccountsScreen: UnmzNavScreen = {
  key: LINKED_ACCOUNTS_SCREEN_ID,
  title: "Linked Accounts",
  content: _LinkedAccountsScreen,
};
