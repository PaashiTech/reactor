import React, { useState } from "react";
import { View } from "@unmaze/views";
import { CASHFLOW_SCREEN_ID, CashflowScreenProps } from "./types";
import { UnmzNavScreen } from "../types";
import {
  BarData,
  MonthlyBarChart,
} from "../../components/app/dashboard/cashflowScreen/MonthlyBarChart";
import { CashflowScreenContextProvider } from "../../components/app/dashboard/cashflowScreen/context/CashflowScreenContextProvider";
import CashflowTopTabs from "../../components/app/dashboard/cashflowScreen/CashflowTopTabs";

const barData: BarData[] = [
  { value: 650, label: "Jan 24" },
  { value: 500, label: "Feb 24" },
  { value: 745, label: "Mar 24" },
  { value: 320, label: "Apr 24" },
  { value: 600, label: "May 24" },
  { value: 256, label: "Jun 24" },
  { value: 300, label: "July 24" },
];

const _CashflowScreen: React.FC<CashflowScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <CashflowScreenContextProvider>
      <View flex={1}>
        <CashflowTopTabs />
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
