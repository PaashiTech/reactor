import React from "react";
import { View, Text } from "@unmaze/views";
import { MonthlyBarChart } from "./MonthlyBarChart";
import { barData } from "./cashflowData";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";
import DailyLineChart from "./DailyLineChart";

type CashflowChartProps = {};

export const CashflowChart: React.FC<CashflowChartProps> = ({}) => {
  const {
    state: { selectedChartType },
  } = useCashflowScreenContext();

  return (
    <View>
      {selectedChartType === "Daily" ? (
        <DailyLineChart />
      ) : (
        <MonthlyBarChart barData={barData} />
      )}
    </View>
  );
};
