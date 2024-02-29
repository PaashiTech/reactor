import { CheckGreen } from "@unmaze/assets";
import { UnmzGradientButton, Text, View } from "@unmaze/views";

import {
  VerificationSuccessScreenProps,
  VERIFICATION_SUCCESS_SCREEN_ID,
} from "./types";
import { useVerificationContext } from "./VerificationContextProvider";
import { UnmzNavScreen } from "../types";

const _VerificationSuccessScreen: React.FC<VerificationSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const { verifiedMessage } = useVerificationContext();

  return (
    <View flex={1} jc="space-between" paddingHorizontal={20} paddingBottom={20}>
      <View paddingVertical={40} gap={40} mt={40} alignItems="center">
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
          <Text
            textAlign="center"
            paddingHorizontal={40}
            fontSize={16}
            letterSpacing={0.32}
            fontWeight={"600"}
            color="#525252"
          >
            {verifiedMessage}
          </Text>
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

export const VerificationSuccessScreen: UnmzNavScreen = {
  key: VERIFICATION_SUCCESS_SCREEN_ID,
  title: "Verify Number",
  content: _VerificationSuccessScreen,
};
