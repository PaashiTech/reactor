import { CashflowContextActions, CashflowContextState } from "./types";

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
        appliedFilters: {
          ...state.appliedFilters,
          duration: action.payload.duration,
        },
      };

    case "ADD_BANK_ACCOUNT":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          bankAccounts: [
            ...state.appliedFilters.bankAccounts,
            action.payload.value,
          ],
        },
      };

    case "REMOVE_BANK_ACCOUNT":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          bankAccounts: state.appliedFilters.bankAccounts.filter(
            (bankAccount) => bankAccount !== action.payload.value
          ),
        },
      };

    case "ADD_ALL_BANK_ACCOUNTS":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          bankAccounts: action.payload.bankAccounts,
        },
      };

    case "REMOVE_ALL_BANK_ACCOUNTS":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          bankAccounts: [],
        },
      };

    default:
      return state;
  }
};
