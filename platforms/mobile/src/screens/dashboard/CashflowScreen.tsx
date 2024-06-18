import React, { useRef, useState } from "react";
import { View, Text } from "@unmaze/views";
import { CASHFLOW_SCREEN_ID, CashflowScreenProps } from "./types";
import { UnmzNavScreen } from "../types";
import {
  AnimatedTabType,
  AnimatedTopTabs,
} from "../../components/app/dashboard/cashflowScreen/AnimatedTopTabs";

const tabs: AnimatedTabType[] = [
  {
    id: 1,
    title: "Spends",
  },
  {
    id: 2,
    title: "Investments",
  },
  {
    id: 3,
    title: "Incoming",
  },
];

const _CashflowScreen: React.FC<CashflowScreenProps> = ({}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleSelectTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <View flex={1}>
      <AnimatedTopTabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabSelect={handleSelectTab}
      />
    </View>
  );
};

export const CashflowScreen: UnmzNavScreen = {
  key: CASHFLOW_SCREEN_ID,
  title: "Cashflow",
  content: _CashflowScreen,
};
