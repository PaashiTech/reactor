import { Text, styled } from "tamagui";

export const HeadingText = styled(Text, {
  unstyled: true,
  fontWeight: "600",
  fontFamily: "$body",
  color: "#262626",

  variants: {
    size: {
      sm: {
        fontSize: "$2",
        lineHeight: "$2",
        letterSpacing: "$2",
      },
      md: {
        fontSize: "$3",
        lineHeight: "$3",
        letterSpacing: "$3",
      },
      lg: {
        fontSize: "$4",
        lineHeight: "$4",
        letterSpacing: "$4",
      },
      xl: {
        fontSize: "$5",
        lineHeight: "$5",
        letterSpacing: "$5",
      },
    },
  } as const,

  defaultVariants: {
    size: "md",
  },
});
