import React from "react";
import {
  getTokens,
  styled,
  Text,
  useTheme,
  withStaticProperties,
  createStyledContext,
  SizeTokens,
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export const ButtonContext = createStyledContext({
  size: "$md" as SizeTokens,
});

const ButtonFrame = styled(LinearGradient, {
  name: "Button",
  context: ButtonContext,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: 4,
  borderRadius: 9999,
  paddingHorizontal: 24,
  paddingVertical: 12,
  colors: ["#fff000", "#ccfd62"],
  start: { x: 0.2, y: 1 },
  end: { x: 1, y: 1 },
  locations: [0.05, 0.92],
  hoverStyle: {},
  pressStyle: {},

  //   variants: {
  //     size: {
  //       "...size": (name, { tokens }) => {
  //         return {
  //           height: tokens.size[name],
  //           //   borderRadius: tokens.radius[name],
  //           paddingHorizontal: tokens.radius[name],
  //           gap: tokens.space[name].val * 0.2,
  //         };
  //       },
  //     },
  //   } as const,
});

export const ButtonText = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,
  color: "#262626",
  fontFamily: "$body",
  userSelect: "none",
  fontSize: 16,
  zIndex: 0,
  //   variants: {
  //     size: {
  //       "...size": (name, { font }) => {
  //         return {
  //           fontSize: font?.size[name],
  //         };
  //       },
  //     },
  //   } as const,
});

const ButtonIcon = (props: { children: React.ReactElement }) => {
  const { size } = React.useContext(ButtonContext);
  const tokens = getTokens();
  const smallerSize = tokens.size[size].val * 0.5;
  const theme = useTheme();
  return React.cloneElement(props.children, {
    zIndex: 0,
    width: smallerSize,
    height: smallerSize,
    color: theme.color.get(),
  });
};

export const UnmzGradientButton = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
});
