import {
  LinkedAccountsScreenProps,
  LINKED_ACCOUNTS_SCREEN_ID,
  GIVE_CONSENT_SCREEN_ID,
} from "./types";
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
import { Plus } from "@unmaze/assets";
import { UnmzNavScreen } from "../types";
import { linkedAccountsData } from "./linkedAccountsData";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  measure,
  runOnUI,
} from "react-native-reanimated";
import { SaafeFooter } from "../../components/app/core/SaafeFooter";

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
                      if (heightValue.value === 0) {
                        runOnUI(() => {
                          "worklet";
                          heightValue.value = withTiming(
                            measure(listRef)!.height + 12
                          );
                        })();
                      } else {
                        heightValue.value = withTiming(0);
                      }
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

                  <Accordion.Content unstyled forceMount>
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
      <SaafeFooter>
        <UnmzGradientButton
          icon={Plus}
          onPress={() => navigation.navigate(GIVE_CONSENT_SCREEN_ID)}
        >
          Add Account
        </UnmzGradientButton>
      </SaafeFooter>
    </View>
  );
};

export const LinkedAccountsScreen: UnmzNavScreen = {
  key: LINKED_ACCOUNTS_SCREEN_ID,
  title: "Linked Accounts",
  content: _LinkedAccountsScreen,
};
