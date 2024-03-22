import { FontSizeTokens } from "tamagui";

type TextPropsWithSize = {
  fontSize: FontSizeTokens;
  lineHeight: FontSizeTokens;
  letterSpacing: FontSizeTokens;
};

const getTextPropsWithSize = (size: FontSizeTokens): TextPropsWithSize => {
  return {
    fontSize: size,
    lineHeight: size,
    letterSpacing: size,
  };
};

const typographySize = {
  xs: getTextPropsWithSize("$1"),
  sm: getTextPropsWithSize("$2"),
  md: getTextPropsWithSize("$3"),
  lg: getTextPropsWithSize("$4"),
  xl: getTextPropsWithSize("$5"),
};

// remove unwanted property
const { xs, ...headingSize } = typographySize;
const { xl, ...bodySize } = typographySize;

export { headingSize, bodySize };
