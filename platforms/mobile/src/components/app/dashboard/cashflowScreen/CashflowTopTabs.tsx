import React, { useEffect } from "react";
import { AnimatedTabType, AnimatedTopTabs } from "./AnimatedTopTabs";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  CASHFLOW_SCREEN_ID,
  CashflowScreenProps,
} from "platforms/mobile/src/screens/dashboard/types";
import { MeStackRouteProps } from "platforms/mobile/src/navigation/navigators/types";

type CashflowTopTabsProps = {};

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

export const CashflowTopTabs: React.FC<CashflowTopTabsProps> = ({}) => {
  const {
    state: { activeTabIndex },
    dispatch,
  } = useCashflowScreenContext();

  const { params } =
    useRoute<RouteProp<Pick<MeStackRouteProps, typeof CASHFLOW_SCREEN_ID>>>();

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_TAB",
      payload: { activeTabIndex: params.activeTabIndex },
    });
  }, []);

  const handleSelectTab = (index: number) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: { activeTabIndex: index } });
  };
  return (
    <AnimatedTopTabs
      tabs={tabs}
      activeTabIndex={activeTabIndex}
      onTabSelect={handleSelectTab}
    />
  );
};
