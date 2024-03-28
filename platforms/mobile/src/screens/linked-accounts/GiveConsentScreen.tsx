import {
  AccentText,
  BodyText,
  HeadingText,
  SVGWrapper,
  ScrollView,
  SecondaryButton,
  UnmzCard,
  UnmzGradientButton,
  View,
  XStack,
} from "@unmaze/views";
import { GIVE_CONSENT_SCREEN_ID, GiveConsentScreenProps } from "./types";
import { UnmzNavScreen } from "../types";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { TextWithHeader } from "../../components/app/core/TextWithHeader";
import {
  HDFCBankLogo,
  UnionBankLogo,
  CanaraBankLogo,
  ChevronDown,
} from "@unmaze/assets";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import { LayoutChangeEvent, Pressable } from "react-native";

export const _GiveConsentScreen: React.FC<GiveConsentScreenProps> = ({
  navigation,
  route,
}) => {
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);
  const [expanded, setExpanded] = useState(false);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(0);

    return {
      height: animatedHeight.value,
    };
  }, [expanded, height]);

  return (
    <View flex={1} jc="space-between">
      <ScrollView flex={1} padding={20} showsVerticalScrollIndicator={false}>
        <View gap={2}>
          <HeadingText size="lg">Approve consent</HeadingText>
          <BodyText size="sm" color="#6F6F6F">
            RBI's AA enables Unmaze to receive end-to-end encrypted data safely!
          </BodyText>
        </View>

        <UnmzCard
          marginTop={20}
          paddingVertical={20}
          paddingHorizontal={16}
          flex={1}
        >
          <View gap={20}>
            <XStack gap={8}>
              <HDFCBankLogo />
              <UnionBankLogo />
              <CanaraBankLogo />
            </XStack>
            <TextWithHeader>
              <TextWithHeader.Header>Purpose</TextWithHeader.Header>
              <TextWithHeader.Content>
                Wealth Management Service
              </TextWithHeader.Content>
            </TextWithHeader>
            <TextWithHeader>
              <TextWithHeader.Header>
                Details will be updated
              </TextWithHeader.Header>
              <TextWithHeader.Content>
                Upto 4 times a day
              </TextWithHeader.Content>
            </TextWithHeader>
            <TextWithHeader>
              <TextWithHeader.Header>
                Details are shared from
              </TextWithHeader.Header>
              <TextWithHeader.Content>
                10 Jan 2023 to 9 Jan 2026
              </TextWithHeader.Content>
            </TextWithHeader>
          </View>
          <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
            <View
              position="absolute"
              onLayout={onLayout}
              gap={20}
              paddingTop={20}
            >
              <XStack>
                <TextWithHeader>
                  <TextWithHeader.Header>
                    Consent requested on
                  </TextWithHeader.Header>
                  <TextWithHeader.Content>10 Jan 2024</TextWithHeader.Content>
                </TextWithHeader>
                <TextWithHeader>
                  <TextWithHeader.Header>Consent Expiry</TextWithHeader.Header>
                  <TextWithHeader.Content>9 Jan 2027</TextWithHeader.Content>
                </TextWithHeader>
              </XStack>
              <TextWithHeader>
                <TextWithHeader.Header>
                  Account Information
                </TextWithHeader.Header>
                <TextWithHeader.Content>
                  Profile, Summary, Transactions
                </TextWithHeader.Content>
              </TextWithHeader>
              <TextWithHeader>
                <TextWithHeader.Header>Account Types</TextWithHeader.Header>
                <TextWithHeader.Content>
                  AIF, CIS, Deposit, ETF, IDR, InvIT, Insurance Policies, Mutual
                  Funds, Recurring Deposit, REIT, Term-Deposit
                </TextWithHeader.Content>
              </TextWithHeader>
            </View>
          </Animated.View>
          <XStack mt={20} gap={4}>
            <AccentText color="#035E5D">
              View {expanded ? "less" : "more"}
            </AccentText>
            <View
              mt={2}
              animation="medium"
              rotate={expanded ? "180deg" : "0deg"}
              onPress={() => setExpanded(!expanded)}
            >
              <SVGWrapper iconSVG={ChevronDown} svgColor="#035E5D" size="sm" />
            </View>
          </XStack>
        </UnmzCard>
      </ScrollView>
      <SaafeFooter>
        <View flexDirection="row" gap={12}>
          <View flexGrow={1}>
            <SecondaryButton>Deny</SecondaryButton>
          </View>
          <View flexGrow={1}>
            <UnmzGradientButton>Approve</UnmzGradientButton>
          </View>
        </View>
      </SaafeFooter>
    </View>
  );
};

export const GiveConsentScreen: UnmzNavScreen = {
  key: GIVE_CONSENT_SCREEN_ID,
  title: "Give Consent",
  content: _GiveConsentScreen,
};
