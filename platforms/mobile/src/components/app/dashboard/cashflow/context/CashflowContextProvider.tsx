import { createContext, useContext, useReducer } from "react";
import { CashflowContextState, CashflowContextType } from "./types";
import { reducer } from "./reducer";

const initialState: CashflowContextState = {
  appliedFilters: {
    duration: "LAST_30_DAYS",
    bankAccounts: [],
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
