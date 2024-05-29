import { View, YStack } from "@unmaze/views";
import {
  AccentText,
  BodyText,
  UnmazePinInput,
  UnmzGradientButton,
} from "@unmaze/views/src/components";
import { useState } from "react";
import {
  INVITE_ONLY_SCREEN_ID,
  PINSetupScreenProps,
  PIN_SETUP_SCREEN_ID,
} from "./types";
import { UnmzNavScreen } from "../types";
import KeyboardAvoidingViewWithDismiss from "../../components/shared/KeyboardAvoidingViewWithDismiss";

const _PinSetupScreen: React.FC<PINSetupScreenProps> = ({
  navigation,
  route,
}) => {
  const [code, setCode] = useState<string>("");
  const [confirmCode, setConfirmCode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const isButtonDisabled = !(code.length === 4 && confirmCode.length === 4);

  const handleSetPin = () => {
    // Implement PIN storage with expo-secure-store here.

    if (code !== confirmCode) {
      setIsError(true);
      return;
    }

    // Next Steps here
    navigation.navigate(INVITE_ONLY_SCREEN_ID);
  };

  return (
    <KeyboardAvoidingViewWithDismiss style={{ flex: 1 }}>
      <View
        flex={1}
        paddingHorizontal={20}
        paddingBottom={16}
        paddingTop={24}
        justifyContent="space-between"
        bg="#FFF"
      >
        <View>
          <YStack gap={12} mb={40}>
            <AccentText size="lg">Setup an Unmaze PIN</AccentText>
            <BodyText color="#6F6F6F">
              Keep your finances secure, we will ask for this PIN every time you
              open the app.
            </BodyText>
          </YStack>
          <YStack gap={32}>
            <UnmazePinInput
              code={code}
              setCode={setCode}
              label="New Pin"
              showDigits={false}
            />
            <UnmazePinInput
              code={confirmCode}
              setCode={setConfirmCode}
              setError={setIsError}
              label="Confirm New Pin"
              showDigits={true}
              isConfirmPin
              isError={isError}
            />
          </YStack>
        </View>
        <UnmzGradientButton onPress={handleSetPin} disabled={isButtonDisabled}>
          Confirm
        </UnmzGradientButton>
      </View>
    </KeyboardAvoidingViewWithDismiss>
  );
};

export const PinSetupScreen: UnmzNavScreen = {
  key: PIN_SETUP_SCREEN_ID,
  title: "",
  content: _PinSetupScreen,
};
