import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyAccountsScreenProps,
} from "./types";
import {
  UnmzGradientButton,
  View,
  Text,
  useUserStore,
  FamilyMemberList,
  ScrollView,
  YStack,
  XStack,
  CustomSwitch,
} from "@unmaze/views";
import { Plus } from "@unmaze/assets";
import { FamilyEmpty } from "../../components/app/family";
import { UnmzNavScreen } from "../types";
import { FooterWithShadow } from "../../components/app/core/FooterWrapper";

const _FamilyDetailsScreen: React.FC<FamilyAccountsScreenProps> = ({
  navigation,
  route,
}) => {
  const family = useUserStore((state) => state.family);
  // const family = [];

  return (
    <View flex={1} jc="space-between">
      {family.length > 0 ? (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <YStack rowGap={16} paddingHorizontal={20} paddingVertical={24}>
            <Text
              color="#262626"
              fontSize={16}
              fontStyle="normal"
              fontWeight="600"
              lineHeight={20}
              letterSpacing={0.32}
            >
              Family Members
            </Text>
            <FamilyMemberList
              members={family.map((fm) => ({
                ...fm,
                onOptions: () => {
                  alert("Delete " + fm.name.first + "'s invite!");
                },
                onRemind: () => {
                  alert("Remind " + fm.name.first + "!");
                },
              }))}
            />
            <XStack
              justifyContent="space-between"
              paddingHorizontal={4}
              paddingVertical={8}
            >
              <Text
                color="#161616"
                fontSize={14}
                fontStyle="normal"
                fontWeight="500"
                lineHeight={18}
                letterSpacing={0.28}
              >
                Share my investment details with the family members
              </Text>
              <CustomSwitch />
            </XStack>
          </YStack>
        </ScrollView>
      ) : (
        <FamilyEmpty />
      )}
      {family.length > 0 ? (
        <FooterWithShadow>
          <UnmzGradientButton
            icon={Plus}
            onPress={() => navigation.navigate(ADD_FAMILY_MEMBER_SCREEN_ID)}
          >
            Add family
          </UnmzGradientButton>
        </FooterWithShadow>
      ) : (
        <View p={20} paddingTop={16}>
          <UnmzGradientButton
            icon={Plus}
            onPress={() => navigation.navigate(ADD_FAMILY_MEMBER_SCREEN_ID)}
          >
            Add family
          </UnmzGradientButton>
        </View>
      )}
    </View>
  );
};

export const FamilyDetailsScreen: UnmzNavScreen = {
  key: FAMILY_ACCOUNTS_SCREEN_ID,
  title: "Family Accounts",
  content: _FamilyDetailsScreen,
};
