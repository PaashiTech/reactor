import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckGreen } from "@unmaze/assets";
import {
  AccentText,
  HeadingText,
  UnmzGradientButton,
  View,
} from "@unmaze/views";

import { CONSENT_SCREEN_ID } from "../../../../screens/onboarding/types";

import React from "react";
import { OnboardingStackRouteProps } from "../../../../navigation/navigators/types";

type AuthoriseBanksSuccessProps = {
  bottomSheetRef: any;
  navigation: any;
};

export const AuthoriseBanksSuccess: React.FC<AuthoriseBanksSuccessProps> = ({
  bottomSheetRef,
  navigation,
}) => {
  return (
    <View flex={1} justifyContent="space-between">
      <View alignItems="center" paddingTop={16}>
        <CheckGreen width={80} height={80} />
        <HeadingText mt={32} size="xl">
          Congratulations!
        </HeadingText>
        <AccentText mt={12} textAlign="center" size="lg" color="#525252">
          You have successfully authorized 3 accounts
        </AccentText>
      </View>
      <UnmzGradientButton
        onPress={() => {
          bottomSheetRef.current?.close();
          navigation.navigate(CONSENT_SCREEN_ID);
        }}
      >
        View Consent
      </UnmzGradientButton>
    </View>
  );
};
