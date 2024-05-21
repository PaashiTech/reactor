import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnmzNavScreen } from "../types";
import { AAFlowSuccessScreenProps, AA_FLOW_SUCCESS_SCREEN_ID } from "./types";
import {
  BodyText,
  HeadingText,
  ShadowWrapper,
  UnmzGradientButton,
  View,
  ViewProps,
  XStack,
  YStack,
} from "@unmaze/views";
import { CheckGreen, HDFCBankLogo, UnionBankLogo } from "@unmaze/assets";
import { useEffect } from "react";

const _AAFlowSuccessScreen: React.FC<AAFlowSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
    });
  }, []);

  const handlePress = () => {
    // Handle further navigation
  };

  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF" justifyContent="space-between">
      <View flex={1} paddingHorizontal={20}>
        <View marginVertical="auto" alignItems="center">
          <CheckGreen width={96} height={96} />
          <YStack gap={8} mt={40} alignItems="center">
            <HeadingText size="xl" textAlign="center">
              Congratulations!
            </HeadingText>
            <BodyText textAlign="center">
              You have successfully started tracking HDFC, ICICI and Indian
              Overseas Banks!
            </BodyText>
            <XStack gap={8}>
              <HDFCBankLogo />
              <UnionBankLogo />
              <HDFCBankLogo />
            </XStack>
          </YStack>
          <BodyText mt={80} textAlign="center">
            Sit back and relax, while we generate insights about your spending
            pattern and the health of your portfolio!
          </BodyText>
        </View>
      </View>
      <ShadowWrapper size="md">
        <View p={20} bg="#FFF">
          <UnmzGradientButton onPress={handlePress}>
            Continue
          </UnmzGradientButton>
        </View>
      </ShadowWrapper>
    </View>
  );
};

export const AAFlowSuccessScreen: UnmzNavScreen = {
  key: AA_FLOW_SUCCESS_SCREEN_ID,
  title: "AA Flow Success",
  content: _AAFlowSuccessScreen,
};
