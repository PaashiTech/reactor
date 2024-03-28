import { CheckGreen } from "@unmaze/assets";
import { UnmzGradientButton, Text, View, HeadingText } from "@unmaze/views";

import {
  AccountUpdateSuccessScreenProps,
  ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
} from "../shared/types";
import { UnmzNavScreen } from "../types";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";

const _AccountUpdateSuccessScreen: React.FC<
  AccountUpdateSuccessScreenProps
> = ({ navigation, route }) => {
  const {
    state: {
      shared: { verifiedMessage },
    },
  } = useStackContext();

  return (
    <View flex={1} jc="space-between" paddingHorizontal={20} paddingBottom={20}>
      <View paddingVertical={40} gap={40} mt={168} alignItems="center">
        <CheckGreen width={96} height={96} />
        <View gap={8}>
          <Text
            textAlign="center"
            fontSize={24}
            fontWeight={"600"}
            letterSpacing={0.48}
            color="#161616"
          >
            Congratulations!
          </Text>
          <HeadingText
            size="lg"
            color="#525252"
            textAlign="center"
            paddingHorizontal={40}
          >
            {verifiedMessage}
          </HeadingText>
        </View>
      </View>
      <UnmzGradientButton
        onPress={() => {
          navigation.popToTop();
        }}
      >
        Confirm
      </UnmzGradientButton>
    </View>
  );
};

export const AccountUpdateSuccessScreen: UnmzNavScreen = {
  key: ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
  title: "Account Update Success",
  content: _AccountUpdateSuccessScreen,
};
