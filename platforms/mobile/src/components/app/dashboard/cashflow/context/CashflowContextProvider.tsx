import { createContext, useContext, useReducer } from "react";
import {
  CashflowContextState,
  CashflowContextType,
} from "./cashflowContext.types";
import { reducer } from "./reducer";
import { banksList } from "./data";

const initialState: CashflowContextState = {
  appliedFilters: {
    duration: "LAST_30_DAYS",
    bankAccounts: banksList.map((bank) => bank.value), // All Banks as default selection
  },
  selectedFilters: {
    duration: "LAST_30_DAYS",
    bankAccounts: banksList.map((bank) => bank.value), // All Banks as default selection
  },
};

const CashflowContext = createContext<CashflowContextType>({
  state: initialState,
  dispatch: () => {},
});

type CashflowContextProviderProps = {
  children: React.ReactNode;
};

export const CashflowContextProvider: React.FC<
  CashflowContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CashflowContext.Provider value={{ state, dispatch }}>
      {children}
    </CashflowContext.Provider>
  );
};

export const useCashflowContext = () => useContext(CashflowContext);
