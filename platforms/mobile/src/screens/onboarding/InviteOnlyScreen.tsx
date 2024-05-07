import {
  BodyText,
  HeadingText,
  SecondaryButton,
  UnmazePinInput,
  UnmzGradientButton,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import { INVITE_ONLY_SCREEN_ID, OnboardingScreenProps } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnmazeLogo } from "@unmaze/assets/icons";
import { useState } from "react";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";

const _InviteOnlyScreen: React.FC<OnboardingScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();
  const [code, setCode] = useState<string>("");

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF">
      <KeyboardAvoidingViewWithDismiss style={{ flex: 1 }}>
        <View flex={1} paddingHorizontal={20} justifyContent="space-between">
          <View>
            <View paddingVertical={12} alignItems="center">
              <UnmazeLogo />
            </View>
            <YStack gap={12} alignItems="center" paddingHorizontal={44}>
              <HeadingText size="xl">We're invite only</HeadingText>
              <BodyText textAlign="center">
                Something catchy and sends the message that for the time being
                we want curious people to try out new technology
              </BodyText>
            </YStack>
            <View alignItems="center" mt={40}>
              <UnmazePinInput
                code={code}
                setCode={setCode}
                label=""
                showDigits
                isConfirmPin
                isError={false}
              />
            </View>
          </View>
          <YStack gap={12} paddingVertical={16}>
            <UnmzGradientButton>Confirm</UnmzGradientButton>
            <SecondaryButton>I don't have code</SecondaryButton>
          </YStack>
        </View>
      </KeyboardAvoidingViewWithDismiss>
    </View>
  );
};

export const InviteOnlyScreen: UnmzNavScreen = {
  key: INVITE_ONLY_SCREEN_ID,
  title: "Invite Only",
  content: _InviteOnlyScreen,
};
