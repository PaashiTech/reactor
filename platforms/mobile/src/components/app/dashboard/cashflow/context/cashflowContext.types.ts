import { DurationType } from "./utility.types";

export type CashflowContextState = {
  appliedFilters: {
    duration: DurationType;
    bankAccounts: string[];
  };
  selectedFilters: {
    duration: DurationType;
    bankAccounts: string[];
  };
};

type SetDuration = {
  type: "SET_DURATION";
  payload: { duration: DurationType };
};

type AddBankAccount = {
  type: "ADD_BANK_ACCOUNT";
  payload: { value: string };
};

type RemoveBankAccount = {
  type: "REMOVE_BANK_ACCOUNT";
  payload: { value: string };
};

type AddAllBankAccounts = {
  type: "ADD_ALL_BANK_ACCOUNTS";
  payload: {
    bankAccounts: string[];
  };
};

type RemoveAllBankAccounts = {
  type: "REMOVE_ALL_BANK_ACCOUNTS";
};

type ApplyFilters = {
  type: "APPLY_FILTERS";
};

export type CashflowContextActions =
  | SetDuration
  | AddBankAccount
  | RemoveBankAccount
  | AddAllBankAccounts
  | RemoveAllBankAccounts
  | ApplyFilters;

export type CashflowContextType = {
  state: CashflowContextState;
  dispatch: React.Dispatch<CashflowContextActions>;
};
