import {
  CashflowContextActions,
  CashflowContextState,
} from "./cashflowContext.types";

type CashflowReducerType = {
  (
    state: CashflowContextState,
    action: CashflowContextActions
  ): CashflowContextState;
};

export const reducer: CashflowReducerType = (state, action) => {
  switch (action.type) {
    case "SET_DURATION":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          duration: action.payload.duration,
        },
      };

    case "ADD_BANK_ACCOUNT":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          bankAccounts: [
            ...state.selectedFilters.bankAccounts,
            action.payload.value,
          ],
        },
      };

    case "REMOVE_BANK_ACCOUNT":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          bankAccounts: state.selectedFilters.bankAccounts.filter(
            (bankAccount) => bankAccount !== action.payload.value
          ),
        },
      };

    case "ADD_ALL_BANK_ACCOUNTS":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          bankAccounts: action.payload.bankAccounts,
        },
      };

    case "REMOVE_ALL_BANK_ACCOUNTS":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          bankAccounts: [],
        },
      };

    case "APPLY_FILTERS":
      return {
        ...state,
        appliedFilters: state.selectedFilters,
      };

    default:
      return state;
  }
};
