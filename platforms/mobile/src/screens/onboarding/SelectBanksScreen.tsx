import {
  BodyText,
  HeadingText,
  Progress,
  ScrollView,
  UnmzGradientButton,
  View,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import React, { useCallback, useMemo, useRef } from "react";
import { SELECT_BANKS_SCREEN_ID, SelectBanksScreenProps } from "./types";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { Button, StyleSheet, Text } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _SelectBanksScreen: React.FC<SelectBanksScreenProps> = ({
  navigation,
  route,
}) => {
  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);

  return (
    <View flex={1} justifyContent="space-between">
      <View flex={1}>
        <Progress value={50} height={4} backgroundColor="#EBFFFF">
          <Progress.Indicator
            animation="medium"
            backgroundColor="#08BDBA"
            borderTopRightRadius={2}
            borderBottomRightRadius={2}
          />
        </Progress>
        <ScrollView
          flex={1}
          showsVerticalScrollIndicator={false}
          paddingHorizontal={20}
          paddingVertical={24}
        >
          <View gap={2}>
            <HeadingText size="lg">
              Select the banks you hold an account.
            </HeadingText>
            <BodyText color="#6F6F6F">You can select multiple banks</BodyText>
          </View>
        </ScrollView>
      </View>

      <SaafeFooter>
        <YStack gap={12}>
          <BodyText textAlign="center" size="sm" color="#525252">
            Connect at least 1 of your banks to proceed
          </BodyText>
          <UnmzGradientButton>Continue</UnmzGradientButton>
        </YStack>
      </SaafeFooter>
      <BottomSheet snapPoints={snapPoints}>
        <View flex={1} p={20} bg={"lime"}>
          <HeadingText>Hello Bottom Sheet</HeadingText>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export const SelectBanksScreen: UnmzNavScreen = {
  key: SELECT_BANKS_SCREEN_ID,
  title: "Link Accounts",
  content: _SelectBanksScreen,
};
