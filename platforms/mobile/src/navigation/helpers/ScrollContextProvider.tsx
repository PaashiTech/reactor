import { createContext, useContext, useRef } from "react";
import { Animated } from "react-native";

// Reference -> https://www.youtube.com/watch?v=nayqNApYp-I

type ScrollContextType = {
  scrollY: Animated.Value;
  offsetAnim: Animated.Value;
  bottomTabTranslate:
    | Animated.AnimatedInterpolation<string | number>
    | undefined;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollY: new Animated.Value(0),
  offsetAnim: new Animated.Value(0),
  bottomTabTranslate: undefined,
});

export const TAB_BAR_HEIGHT = 100;

export const ScrollContextProvider = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: "clamp",
      }),
      offsetAnim
    ),
    0,
    TAB_BAR_HEIGHT
  );

  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, TAB_BAR_HEIGHT],
    outputRange: [0, TAB_BAR_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <ScrollContext.Provider value={{ scrollY, offsetAnim, bottomTabTranslate }}>
      {children}
    </ScrollContext.Provider>
  );
};
export const useScrollContext = () => useContext(ScrollContext);
