import { UnmzGradientButton, View } from "@unmaze/views";
import { OnboardingSlider } from "../../components/app/onboarding/OnboardingSlider";
import { UnmzNavScreen } from "../types";
import {
  ONBOARDING_SCREEN_ID,
  OnboardingScreenProps,
  SSO_SCREEN_ID,
} from "./types";

export const _OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View flex={1} bg="#FFF" justifyContent="space-between">
      <OnboardingSlider />
      <View mt={24} paddingHorizontal={20} paddingVertical={16}>
        <UnmzGradientButton onPress={() => navigation.navigate(SSO_SCREEN_ID)}>
          Continue
        </UnmzGradientButton>
      </View>
    </View>
  );
};

export const OnboardingScreen: UnmzNavScreen = {
  key: ONBOARDING_SCREEN_ID,
  title: "Onboarding Screen",
  content: _OnboardingScreen,
};
