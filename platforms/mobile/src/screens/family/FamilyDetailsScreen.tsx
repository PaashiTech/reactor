import {
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyAccountsScreenProps,
  FamilyScreen,
} from "./types";
import { Text, View } from "@unmaze/views";

const _FamilyDetailsScreen: React.FC<FamilyAccountsScreenProps> = () => {
  return (
    <View flex={1} jc="center" ai="center">
      <Text>Family Account Screen</Text>
    </View>
  );
};

export const FamilyDetailsScreen: FamilyScreen = {
  key: FAMILY_ACCOUNTS_SCREEN_ID,
  title: "Family Accounts",
  background: "linear-gradient",
  content: _FamilyDetailsScreen,
};
