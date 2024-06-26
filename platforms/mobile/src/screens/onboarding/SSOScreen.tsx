import {
  AccentText,
  BodyText,
  Image,
  TertiaryButton,
  Text,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import { Carousal4 } from "@unmaze/assets";
import { EMAIL_LOGIN_SCREEN_ID, SSOScreenProps, SSO_SCREEN_ID } from "./types";
import { UnmzNavScreen } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GoogleLogo } from "@unmaze/assets/icons";
import { Pressable } from "react-native";

const _SSOScreen: React.FC<SSOScreenProps> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View flex={1} bg="#FFF" {...safeAreaInsets}>
      {/**-----------------------------------*
       * To be replaced by some other visual *
       *-------------------------------------*/}
      <View flex={1} jc="center" ai="center">
        <Image
          source={Carousal4}
          width={360 * 0.95}
          height={701 * 0.95}
          resizeMode="contain"
        />
      </View>

      {/**--------*
       * SSO View *
       *----------*/}
      <View paddingHorizontal={20} paddingVertical={16} bg="#FFF">
        <YStack gap={24} alignItems="center">
          <YStack gap={16} alignItems="center">
            <TertiaryButton icon={GoogleLogo} scaleSpace={0.6}>
              Continue with Google
            </TertiaryButton>
            <Pressable
              onPress={() => navigation.navigate(EMAIL_LOGIN_SCREEN_ID)}
            >
              <AccentText
                borderBottomColor="#035E5D"
                borderBottomWidth={1}
                borderStyle="dashed"
                paddingBottom={2}
              >
                Use other Email
              </AccentText>
            </Pressable>
          </YStack>
          <BodyText size="xs" color={"#6F6F6F"}>
            By proceeding, I accept Unmaze's{" "}
            <BodyText size="xs" textDecorationLine="underline">
              T&C
            </BodyText>{" "}
            &{" "}
            <BodyText size="xs" textDecorationLine="underline">
              Privacy
            </BodyText>{" "}
            Policy
          </BodyText>
        </YStack>
      </View>
    </View>
  );
};

export const SSOScreen: UnmzNavScreen = {
  key: SSO_SCREEN_ID,
  title: "SSO Screen",
  content: _SSOScreen,
};
