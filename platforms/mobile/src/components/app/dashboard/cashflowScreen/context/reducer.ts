import {
  CashflowScreenContextActions,
  CashflowScreenContextState,
} from "./cashflowScreenContext.types";

type CashflowScreenReducerType = {
  (
    state: CashflowScreenContextState,
    action: CashflowScreenContextActions
  ): CashflowScreenContextState;
};

export const reducer: CashflowScreenReducerType = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTabIndex: action.payload.activeTabIndex,
      };

    case "SELECT_MONTH_YEAR":
      return {
        ...state,
        selectedMonthYear: action.payload.monthYear,
      };

    case "SELECT_CHART_TYPE":
      return {
        ...state,
        selectedChartType: action.payload.chartType,
      };

    case "SELECT_CASHFLOW_LIST_TYPE":
      return {
        ...state,
        selectedListType: action.payload.cashflowListType,
      };
    default:
      return state;
  }
};
