import React from "react";
import { View, Text } from "@unmaze/views";
import { CASHFLOW_SCREEN_ID, CashflowScreenProps } from "./types";
import { UnmzNavScreen } from "../types";

const _CashflowScreen: React.FC<CashflowScreenProps> = ({}) => {
  return (
    <View flex={1} jc="center" ai="center">
      <Text>CashflowScreen</Text>
    </View>
  );
};

export const CashflowScreen: UnmzNavScreen = {
  key: CASHFLOW_SCREEN_ID,
  title: "Cashflow",
  content: _CashflowScreen,
};
