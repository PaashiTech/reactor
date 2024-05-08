import {
  AccentText,
  BodyText,
  MobileNumberInput,
  UnmzGradientButton,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnmzNavScreen } from "../types";
import { MOBILE_LOGIN_SCREEN_ID } from "./types";
import { useForm } from "react-hook-form";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";

const _MobileLoginScreen = () => {
  const insets = useSafeAreaInsets();
  const { control } = useForm();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF">
      <KeyboardAvoidingViewWithDismiss style={{ flex: 1 }}>
        <View flex={1} paddingHorizontal={20} jc="space-between">
          <YStack gap={40} paddingVertical={16}>
            <YStack gap={12}>
              <AccentText size="lg">Enter your mobile number</AccentText>
              <BodyText color="#6F6F6F">
                The mobile number needs to be linked to your bank account.
              </BodyText>
            </YStack>
            <MobileNumberInput
              control={control}
              name="mobileNumber"
              showDeleteButton
            />
          </YStack>
          <View paddingVertical={16}>
            <UnmzGradientButton>Confirm</UnmzGradientButton>
          </View>
        </View>
      </KeyboardAvoidingViewWithDismiss>
    </View>
  );
};

export const MobileLoginScreen: UnmzNavScreen = {
  key: MOBILE_LOGIN_SCREEN_ID,
  title: "Mobile Login",
  content: _MobileLoginScreen,
};
