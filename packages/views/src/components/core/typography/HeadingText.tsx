import { Text, styled } from "tamagui";
import { headingSize } from "./variants";

export const HeadingText = styled(Text, {
  unstyled: true,
  fontWeight: "600",
  fontFamily: "$body",
  color: "#262626",

  variants: {
    size: headingSize,
  } as const,

  defaultVariants: {
    size: "md",
  },
});
