import { useFonts } from "expo-font";
import { useEffect } from "react";

export const useUnmzFontsExpo = () => {
  const [fontsLoaded, fontError] = useFonts({
    // Tamagui built-ins
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),

    // Custom
    SatoshiVariable: require("./satoshi-variable/Satoshi-Variable.ttf"),
    SatoshiRegular: require("./satoshi-variable/Satoshi-Regular.otf"),
    SatoshiMedium: require("./satoshi-variable/Satoshi-Medium.otf"),
    SatoshiBold: require("./satoshi-variable/Satoshi-Bold.otf"),
    SatoshiLight: require("./satoshi-variable/Satoshi-Light.otf"),
    SatoshiSemibold: require("./satoshi-variable/Satoshi-Semibold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // can hide splash screen here
    }
  }, [fontsLoaded]);

  return [fontsLoaded, fontError];
};
