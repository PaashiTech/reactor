export type CashflowScreenContextState = {
  activeTabIndex: number;
};

type setActiveTab = {
  type: "SET_ACTIVE_TAB";
  payload: { activeTabIndex: number };
};

export type CashflowScreenContextActions = setActiveTab;

export type CashflowScreenContextType = {
  state: CashflowScreenContextState;
  dispatch: React.Dispatch<CashflowScreenContextActions>;
};
