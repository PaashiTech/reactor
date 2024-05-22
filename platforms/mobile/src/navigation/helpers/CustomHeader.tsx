import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChevronLeft, UnmazeLogo } from "@unmaze/assets";
import {
  HeadingText,
  IconButton,
  SVGWrapper,
  ShadowWrapper,
  View,
  XStack,
} from "@unmaze/views";
import { OnboardingStackRouteProps } from "../navigators/types";
import React, { ReactElement } from "react";

type CustomHeaderProps = {
  title: string;
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();
  return (
    <ShadowWrapper size="sm">
      <View bg="#fff" paddingVertical={12} paddingHorizontal={20}>
        <XStack justifyContent="space-between">
          {navigation.canGoBack() ? (
            <IconButton
              icon={ChevronLeft}
              onPress={() => navigation.goBack()}
            />
          ) : (
            <View></View>
          )}
          <HeadingText size="md" color="#035E5D">
            {title}
          </HeadingText>

          <SVGWrapper iconSVG={UnmazeLogo} size="lg" />
        </XStack>
      </View>
    </ShadowWrapper>
  );
};
