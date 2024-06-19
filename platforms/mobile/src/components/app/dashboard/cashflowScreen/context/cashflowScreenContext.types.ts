import { CashflowListType, ChartType } from "./utility.types";

export type CashflowScreenContextState = {
  activeTabIndex: number;
  selectedMonthYear: string;
  selectedChartType: ChartType;
  selectedListType: CashflowListType;
};

type SetActiveTab = {
  type: "SET_ACTIVE_TAB";
  payload: { activeTabIndex: number };
};

type SelectMonthYear = {
  type: "SELECT_MONTH_YEAR";
  payload: { monthYear: string };
};

type SelectChartType = {
  type: "SELECT_CHART_TYPE";
  payload: { chartType: ChartType };
};

type SelectCashflowListType = {
  type: "SELECT_CASHFLOW_LIST_TYPE";
  payload: { cashflowListType: CashflowListType };
};

export type CashflowScreenContextActions =
  | SetActiveTab
  | SelectMonthYear
  | SelectChartType
  | SelectCashflowListType;

export type CashflowScreenContextType = {
  state: CashflowScreenContextState;
  dispatch: React.Dispatch<CashflowScreenContextActions>;
};
