import { UnmzGradientButton, View } from "@unmaze/views";
import { StatusBar } from "react-native";
import { OnboardingSlider } from "../../components/app/onboarding/OnboardingSlider";

export const OnboardingScreen = () => {
  return (
    <View flex={1} justifyContent="space-between">
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <OnboardingSlider />
      <View mt={24} paddingHorizontal={20} paddingVertical={16}>
        <UnmzGradientButton>Continue</UnmzGradientButton>
      </View>
    </View>
  );
};
