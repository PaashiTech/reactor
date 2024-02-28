import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyAccountsScreenProps,
  FamilyScreen,
} from "./types";
import { UnmzGradientButton, View } from "@unmaze/views";
import { Plus } from "@unmaze/assets";
import { FamilyEmpty } from "../../components/app/family";

const _FamilyDetailsScreen: React.FC<FamilyAccountsScreenProps> = ({
  navigation,
  route,
}) => {
  const familyMembers = null;

  return (
    <View flex={1} jc="space-between">
      {familyMembers ? null : <FamilyEmpty />}
      <View p={20} paddingTop={16}>
        <UnmzGradientButton
          icon={Plus}
          onPress={() => navigation.navigate(ADD_FAMILY_MEMBER_SCREEN_ID)}
        >
          Add family
        </UnmzGradientButton>
      </View>
    </View>
  );
};

export const FamilyDetailsScreen: FamilyScreen = {
  key: FAMILY_ACCOUNTS_SCREEN_ID,
  title: "Family Accounts",
  headerBackground: "plain",
  content: _FamilyDetailsScreen,
};
