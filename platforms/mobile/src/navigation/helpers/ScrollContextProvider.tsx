import { createContext, useContext, useRef } from "react";
import { Animated } from "react-native";

type ScrollContextType = {
  translateY: Animated.Value;
};

const ScrollContext = createContext<ScrollContextType>({
  translateY: new Animated.Value(0),
});

export const ScrollContextProvider = ({ children }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollContext.Provider value={{ translateY }}>
      {children}
    </ScrollContext.Provider>
  );
};
export const useScrollContext = () => useContext(ScrollContext);
