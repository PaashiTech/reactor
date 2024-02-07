import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen, UnmzStackNavRouteProps } from "../types";
import { Text, View } from "tamagui";
import { CheckGreen } from "@unmaze/assets";
import { UnmzGradientButton } from "@unmaze/views";

const _VerificationSuccessScreen: React.FC<
  NativeStackScreenProps<UnmzStackNavRouteProps, "0012.k">
> = ({ navigation, route }) => {
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
          Number updated successfully
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
  key: "0012.k",
  title: "Verify Number",
  background: "plain",
  content: _VerificationSuccessScreen,
};
