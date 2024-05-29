import {
  AccentText,
  BodyText,
  HeadingText,
  Image,
  SVGWrapper,
  ScrollView,
  UnmzGradientButton,
  View,
  ViewProps,
  XStack,
  YStack,
  useUserStore,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  INTRO_TO_AA_SCREEN_ID,
  IntoToAAScreenProps,
  SELECT_ENTITIES_SCREEN_ID,
} from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IntroToAA } from "@unmaze/assets";
import { SaafeFooter } from "../../components/core/FooterWrapper";
import { Lock, PlaceholderIcon, ChainLink, SvgProps } from "@unmaze/assets";

type DataType = {
  id: number;
  infoText: string;
  icon: React.FC<SvgProps>;
}[];

const _IntroToAAScreen: React.FC<IntoToAAScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();
  const { phone } = useUserStore();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const data: DataType = [
    {
      id: 1,
      infoText: "Your data is protected with end-to-end encryption",
      icon: Lock,
    },
    {
      id: 2,
      infoText:
        "Manage banking, investments, credit bills and loans all under one roof",
      icon: PlaceholderIcon,
    },
    {
      id: 3,
      infoText: "Connect and disconnect accounts at your terms",
      icon: ChainLink,
    },
  ];

  const handlePress = () => {
    // Navigate further
    navigation.navigate(SELECT_ENTITIES_SCREEN_ID);
  };

  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF">
      <View flex={1} justifyContent="space-between">
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View alignItems="center" paddingHorizontal={20}>
            <Image source={IntroToAA} />
          </View>
          <View mt={44} paddingHorizontal={20}>
            <YStack gap={4}>
              <HeadingText size="xl" textAlign="center">
                Track your financial accounts
              </HeadingText>
              <BodyText color="#525252" textAlign="center">
                Manage wealth using personalized insights
              </BodyText>
            </YStack>
            <YStack gap={20} mt={28}>
              {data.map((info) => {
                return (
                  <XStack gap={12} key={info.id}>
                    <SVGWrapper iconSVG={info.icon} size="md" />
                    <BodyText flex={1}>{info.infoText}</BodyText>
                  </XStack>
                );
              })}
            </YStack>
          </View>
        </ScrollView>

        <SaafeFooter>
          <BodyText textAlign="center">
            Link accounts connected to{" "}
            <AccentText color="#035E5D">+91-{phone.primary}</AccentText>
          </BodyText>
          <UnmzGradientButton onPress={handlePress}>
            Continue
          </UnmzGradientButton>
        </SaafeFooter>
      </View>
    </View>
  );
};

export const IntroToAAScreen: UnmzNavScreen = {
  key: INTRO_TO_AA_SCREEN_ID,
  title: "Intro to AA",
  content: _IntroToAAScreen,
};
