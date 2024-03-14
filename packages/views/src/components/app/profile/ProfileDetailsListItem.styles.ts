import { TextProps, ThemeableStackProps } from "tamagui";

export const ListItemFrameStyles: ThemeableStackProps = {
  flexDirection: "column",
  alignItems: "stretch",
  paddingVertical: 12,
  paddingHorizontal: 20,
  gap: 4,
};

export const ListItemSubtitleStyles: TextProps = {
  color: "#6F6F6F",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: 18,
  letterSpacing: 0.28,
};

export const ListItemTitleStyles: TextProps = {
  justifyContent: "flex-start",
  color: "#262626",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 20,
  letterSpacing: 0.32,
};
