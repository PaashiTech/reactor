import React from "react";
import { ScrollView } from "@unmaze/views";
import { CASHFLOW_SCREEN_ID, CashflowScreenProps } from "./types";
import { UnmzNavScreen } from "../types";
import { MonthlyBarChart } from "../../components/app/dashboard/cashflowScreen/MonthlyBarChart";
import { CashflowScreenContextProvider } from "../../components/app/dashboard/cashflowScreen/context/CashflowScreenContextProvider";
import { CashflowTopTabs } from "../../components/app/dashboard/cashflowScreen/CashflowTopTabs";
import { barData } from "../../components/app/dashboard/cashflowScreen/cashflowData";
import { AmountWithBottomSheetFilter } from "../../components/app/dashboard/cashflowScreen/AmountWithBottomSheetFilter";
import { MonthSelector } from "../../components/app/dashboard/cashflowScreen/MonthSelector";
import { ChartTypeSelector } from "../../components/app/dashboard/cashflowScreen/ChartTypeSelector";
import { CashflowListTypeSelector } from "../../components/app/dashboard/cashflowScreen/CashflowListTypeSelector";
import { CashflowCategoriesList } from "../../components/app/dashboard/cashflowScreen/CashflowCategoriesList";
import { CashflowList } from "../../components/app/dashboard/cashflowScreen/CashflowList";
import { CashflowChart } from "../../components/app/dashboard/cashflowScreen/CashflowChart";

const _CashflowScreen: React.FC<CashflowScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <CashflowScreenContextProvider>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <CashflowTopTabs />
        <AmountWithBottomSheetFilter />
        <MonthSelector />
        <CashflowChart />
        <ChartTypeSelector />
        <CashflowListTypeSelector />
        <CashflowList />
      </ScrollView>
    </CashflowScreenContextProvider>
  );
};

export const CashflowScreen: UnmzNavScreen = {
  key: CASHFLOW_SCREEN_ID,
  title: "Cashflow",
  content: _CashflowScreen,
};
