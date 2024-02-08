import { CheckGreen } from "@unmaze/assets";
import { UnmzGradientButton, Text, View } from "@unmaze/views";

import {
  Screen,
  VERIFICATION_SUCCESS_SCREEN_ID,
  VerificationSuccessScreenProps,
} from "../types";

const _VerificationSuccessScreen: React.FC<VerificationSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const { verifiedType } = route.params;
  const updatedType = verifiedType === "email" ? "Email" : "Number";

  return (
    <View flex={1} jc="space-between" paddingHorizontal={20} paddingBottom={20}>
      <View paddingVertical={40} gap={40} mt={40} alignItems="center">
        <Text
          textAlign="center"
          paddingHorizontal={50}
          fontSize={16}
          letterSpacing={0.32}
          fontWeight={"600"}
        >
          {updatedType} updated successfully
        </Text>
        <CheckGreen />
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

export const VerificationSuccessScreen: Screen = {
  key: VERIFICATION_SUCCESS_SCREEN_ID,
  title: "Verify Number",
  background: "plain",
  content: _VerificationSuccessScreen,
};
