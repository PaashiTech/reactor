import { ButtonProps } from "tamagui";
import { LinearGradientExtraProps } from "@tamagui/linear-gradient";

const UnmzButtonStyles: ButtonProps = {
  color: "#262626",
  unstyled: true,
  borderRadius: 9999,
  overflow: "hidden",
  outlineWidth: 0,
  borderWidth: 0,
  paddingHorizontal: 24,
  paddingVertical: 12,
  scaleSpace: 0.43,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 42,
};

const UnmzLinearGradientStyles: LinearGradientExtraProps = {
  colors: ["#fff000", "#ccfd62"],
  locations: [0, 0.8854],
  start: [0, 0],
  end: [1, 1],
};

export { UnmzButtonStyles, UnmzLinearGradientStyles };
