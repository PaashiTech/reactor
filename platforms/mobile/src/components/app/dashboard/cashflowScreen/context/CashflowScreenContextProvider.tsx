import { createContext, useContext, useReducer } from "react";
import {
  CashflowScreenContextState,
  CashflowScreenContextType,
} from "./cashflowScreenContext.types";
import { reducer } from "./reducer";
import { getMonthYearList } from "../cashflowData";

const initialState: CashflowScreenContextState = {
  activeTabIndex: 0,
  selectedMonthYear: getMonthYearList()[0],
  selectedChartType: "Monthly",
  selectedListType: "Categories",
};

const CashflowScreenContext = createContext<CashflowScreenContextType>({
  state: initialState,
  dispatch: () => {},
});

type CashflowScreenContextProviderProps = {
  children: React.ReactNode;
};

export const CashflowScreenContextProvider: React.FC<
  CashflowScreenContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CashflowScreenContext.Provider value={{ state, dispatch }}>
      {children}
    </CashflowScreenContext.Provider>
  );
};

export const useCashflowScreenContext = () => useContext(CashflowScreenContext);
