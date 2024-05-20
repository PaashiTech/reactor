import {
  AccentText,
  BodyText,
  HeadingText,
  SVGWrapper,
  ScrollView,
  SecondaryButton,
  Separator,
  ShadowWrapper,
  TamaguiComponent,
  TamaguiElement,
  TamaguiTextElement,
  UnmzCard,
  UnmzGradientButton,
  View,
  ViewProps,
  XStack,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { TextWithHeader } from "../../components/app/core/TextWithHeader";
import {
  HDFCBankLogo,
  UnionBankLogo,
  CanaraBankLogo,
  ChevronDown,
} from "@unmaze/assets";

import { useEffect, useRef, useState } from "react";

import { CONSENT_SCREEN_ID, ConsentScreenProps } from "./types";
import { Animated } from "react-native";

const initialWidths = {
  purpose: 30,
  accountInfo: 70,
  data: 65,
  accountTypes: 50,
};

const getWidthValue = (expanded: boolean, width: number) =>
  expanded ? width * 2 : width;

export const _ConsentScreen: React.FC<ConsentScreenProps> = ({
  navigation,
  route,
}) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedPurpose = useRef(
    new Animated.Value(initialWidths.purpose)
  ).current;
  const animatedAccountInfo = useRef(
    new Animated.Value(initialWidths.accountInfo)
  ).current;
  const animatedData = useRef(new Animated.Value(initialWidths.data)).current;
  const animatedAccountTypes = useRef(
    new Animated.Value(initialWidths.accountTypes)
  ).current;

  const animate = (animatedValue: Animated.Value, toValue: number) => {
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animate(animatedHeight, expanded ? 130 : 0);
    animate(animatedPurpose, getWidthValue(expanded, initialWidths.purpose));
    animate(
      animatedAccountInfo,
      getWidthValue(expanded, initialWidths.accountInfo)
    );
    animate(animatedData, getWidthValue(expanded, initialWidths.data));
    animate(
      animatedAccountTypes,
      getWidthValue(expanded, initialWidths.accountTypes)
    );
  }, [expanded]);

  return (
    <View flex={1} jc="space-between">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View gap={2}>
          <HeadingText size="lg">Details shared with Unmaze</HeadingText>
          <BodyText size="md" color="#525252">
            RBI's <AccentText color="#161616">Saafe</AccentText> enables{" "}
            <AccentText color="#009D9A">Unmaze</AccentText> to safely receive
            end-to-end encrypted data!
          </BodyText>
        </View>

        <ShadowWrapper size="sm">
          <View
            marginTop={20}
            paddingVertical={20}
            paddingHorizontal={16}
            borderRadius={12}
            bg="#FFF"
          >
            <YStack gap={20}>
              <XStack gap={8}>
                <HDFCBankLogo />
                <UnionBankLogo />
                <CanaraBankLogo />
              </XStack>

              <YStack gap={8}>
                <YStack gap={4}>
                  <AccentText color="#6F6F6F">Purpose</AccentText>
                  <Animated.View
                    style={{
                      width: animatedPurpose,
                      borderBottomWidth: 2,
                      borderColor: "#BE95FF",
                    }}
                  />
                </YStack>
                <AccentText>Personalized Wealth Management</AccentText>
              </YStack>

              <YStack gap={8}>
                <YStack gap={4}>
                  <AccentText color="#6F6F6F">Account information</AccentText>
                  <Animated.View
                    style={{
                      width: animatedAccountInfo,
                      borderBottomWidth: 2,
                      borderColor: "#BE95FF",
                    }}
                  />
                </YStack>
                <YStack gap={4}>
                  <XStack gap={4}>
                    <BodyText>Info:</BodyText>
                    <AccentText>Profile, Summary, Transactions</AccentText>
                  </XStack>
                  <XStack gap={4}>
                    <BodyText>Period:</BodyText>
                    <AccentText>10 Jan 2023 to 9 Jan 2026</AccentText>
                  </XStack>
                  <XStack gap={4}>
                    <BodyText>Frequency:</BodyText>
                    <AccentText>Upto 4 times a day</AccentText>
                  </XStack>
                </YStack>
              </YStack>

              <Animated.View
                style={{ gap: 20, height: animatedHeight, overflow: "hidden" }}
              >
                <YStack gap={8}>
                  <YStack gap={4}>
                    <AccentText color="#6F6F6F">Data is shared from</AccentText>
                    <Animated.View
                      style={{
                        width: animatedData,
                        borderBottomWidth: 2,
                        borderColor: "#BE95FF",
                      }}
                    />
                  </YStack>
                  <AccentText>10 Jan 2023 to 9 Jan 2026</AccentText>
                </YStack>

                <YStack gap={8}>
                  <YStack gap={4}>
                    <AccentText color="#6F6F6F">Account Types</AccentText>
                    <Animated.View
                      style={{
                        width: animatedAccountTypes,
                        borderBottomWidth: 2,
                        borderColor: "#BE95FF",
                      }}
                    />
                  </YStack>
                  <AccentText>
                    Savings, Recurring Deposit, Term-Deposit
                  </AccentText>
                </YStack>
              </Animated.View>
            </YStack>

            <XStack>
              <View
                mt={10}
                flexDirection="row"
                gap={4}
                onPress={() => {
                  setExpanded(!expanded);
                }}
              >
                <AccentText color="#035E5D">
                  View {expanded ? "less" : "more"}
                </AccentText>
                <View
                  mt={2}
                  animation="medium"
                  rotate={expanded ? "180deg" : "0deg"}
                >
                  <SVGWrapper
                    iconSVG={ChevronDown}
                    svgColor="#035E5D"
                    size="sm"
                  />
                </View>
              </View>
            </XStack>
          </View>
        </ShadowWrapper>

        <View mt="auto" paddingTop={16}>
          <ShadowWrapper size="sm">
            <View
              paddingHorizontal={16}
              paddingVertical={12}
              borderRadius={12}
              borderWidth={1}
              alignItems="center"
              borderColor="#08BDBA"
              bg="#EBFFFF"
            >
              <AccentText size="sm">
                2000+ people linked their accounts this week!
              </AccentText>
            </View>
          </ShadowWrapper>
        </View>
      </ScrollView>
      <SaafeFooter>
        <View>
          <BodyText textAlign="center" size="sm" color="#525252">
            You can cancel sharing anytime from settings later.
          </BodyText>
          <View mt={12} flexDirection="row" gap={12}>
            <View flexGrow={1}>
              <SecondaryButton>Deny</SecondaryButton>
            </View>
            <View flexGrow={1}>
              <UnmzGradientButton>Approve</UnmzGradientButton>
            </View>
          </View>
        </View>
      </SaafeFooter>
    </View>
  );
};

export const ConsentScreen: UnmzNavScreen = {
  key: CONSENT_SCREEN_ID,
  title: "Consent Details",
  content: _ConsentScreen,
};
