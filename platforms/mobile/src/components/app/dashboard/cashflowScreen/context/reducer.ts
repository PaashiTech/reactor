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

    default:
      return state;
  }
};
