import { ButtonProps } from "tamagui";
import { LinearGradientExtraProps } from "@tamagui/linear-gradient";

const UnmzButtonStyles: ButtonProps = {
  color: "#262626",
  borderRadius: 9999,
  overflow: "hidden",
  outlineWidth: 0,
  borderWidth: 0,
  paddingHorizontal: 24,
  paddingVertical: 12,
  focusStyle: { outlineWidth: 0, borderWidth: 0 },
  pressStyle: { outlineWidth: 0, borderWidth: 0 },
  hoverStyle: { outlineWidth: 0, borderWidth: 0 },
};

const UnmzLinearGradientStyles: LinearGradientExtraProps = {
  colors: ["#fff000", "#ccfd62"],
  locations: [0.05, 0.92],
  start: [0.2, 1],
  end: [1, 1],
};

export { UnmzButtonStyles, UnmzLinearGradientStyles };
