import { createContext, useContext, useReducer } from "react";
import { StackActions, StackState } from "./stackContext.types";
import { reducer } from "./reducer";

const initialState: StackState = {
  profile: {
    phoneType: "primary",
  },
};

type StackContextProps = {
  state: StackState;
  dispatch: React.Dispatch<StackActions>;
};

const StackContext = createContext<StackContextProps>({
  state: initialState,
  dispatch: () => {},
});

interface StackContextProviderProps {
  children: React.ReactNode;
}

export const StackContextProvider: React.FC<StackContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StackContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StackContext.Provider>
  );
};

export const useStackContext = () => useContext(StackContext);
