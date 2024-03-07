import { LinkedAccountsScreenProps, LINKED_ACCOUNTS_SCREEN_ID } from "./types";
import { UnmzGradientButton, View, Text } from "@unmaze/views";
import { Plus } from "@unmaze/assets";
import { FamilyEmpty } from "../../components/app/family";
import { UnmzNavScreen } from "../types";

const _LinkedAccountsScreen: React.FC<LinkedAccountsScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View flex={1} jc="space-between">
      <Text>Linked Accounts Screen</Text>
    </View>
  );
};

export const LinkedAccountsScreen: UnmzNavScreen = {
  key: LINKED_ACCOUNTS_SCREEN_ID,
  title: "Linked Accounts",
  content: _LinkedAccountsScreen,
};
