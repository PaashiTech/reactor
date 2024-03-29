export type DurationType = "LAST_30_DAYS" | "MONTHLY";

export type CashflowContextState = {
  appliedFilters: {
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

export type CashflowContextActions =
  | SetDuration
  | AddBankAccount
  | RemoveBankAccount
  | AddAllBankAccounts
  | RemoveAllBankAccounts;

export type CashflowContextType = {
  state: CashflowContextState;
  dispatch: React.Dispatch<CashflowContextActions>;
};
