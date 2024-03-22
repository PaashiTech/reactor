import { Text, styled } from "tamagui";

export const BodyText = styled(Text, {
  fontWeight: "400",
  fontFamily: "$body",
  color: "#000",

  variants: {
    size: {
      xs: {
        fontSize: "$1",
        lineHeight: "$1",
        letterSpacing: "$1",
      },
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
    },
  } as const,

  defaultVariants: {
    size: "md",
  },
});
