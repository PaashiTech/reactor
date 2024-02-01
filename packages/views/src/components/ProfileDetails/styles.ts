import { TextProps, ThemeableStackProps } from "tamagui";

export const ListItemFramStyles: ThemeableStackProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  paddingVertical: 12,
  paddingHorizontal: 0,
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

// color: var(--text-text_base, #262626);
// font-family: "Satoshi Variable";
// font-size: 16px;
// font-style: normal;
// font-weight: 500;
// line-height: 20px; /* 125% */
// letter-spacing: 0.32px;
