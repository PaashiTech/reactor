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
        <View marginTop={20} paddingHorizontal={20}>
          <Accordion width="100%" type="multiple" gap={16}>
            {linkedAccountsData.map((item) => {
              return (
                <Accordion.Item value={item.name} key={item.id}>
                  <Accordion.Trigger unstyled>
                    {({ open }) => (
                      <LinkedAccountsAccordionTrigger
                        key={item.id}
                        open={open}
                        item={item}
                      />
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content unstyled>
                    <View marginVertical={12} gap={8} paddingHorizontal={6}>
                      {item.accounts.map((account) => {
                        return (
                          <LinkedAccountsAccordionContentItem
                            key={account.id}
                            account={account}
                            type={account.isLinked ? "info" : "link"}
                          />
                        );
                      })}
                    </View>
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
