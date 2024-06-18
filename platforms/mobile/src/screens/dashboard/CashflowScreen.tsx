import React, { useState } from "react";
import { View } from "@unmaze/views";
import { CASHFLOW_SCREEN_ID, CashflowScreenProps } from "./types";
import { UnmzNavScreen } from "../types";
import { MonthlyBarChart } from "../../components/app/dashboard/cashflowScreen/MonthlyBarChart";
import { CashflowScreenContextProvider } from "../../components/app/dashboard/cashflowScreen/context/CashflowScreenContextProvider";
import { CashflowTopTabs } from "../../components/app/dashboard/cashflowScreen/CashflowTopTabs";
import { barData } from "../../components/app/dashboard/cashflowScreen/cashflowData";
import { AmountWithBottomSheetFilter } from "../../components/app/dashboard/cashflowScreen/AmountWithBottomSheetFilter";

const _CashflowScreen: React.FC<CashflowScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <CashflowScreenContextProvider>
      <View flex={1}>
        <CashflowTopTabs />
        <AmountWithBottomSheetFilter />
        <MonthlyBarChart barData={barData} />
      </View>
    </CashflowScreenContextProvider>
  );
};

export const CashflowScreen: UnmzNavScreen = {
  key: CASHFLOW_SCREEN_ID,
  title: "Cashflow",
  content: _CashflowScreen,
};

const CashflowScreenContent = () => {};
