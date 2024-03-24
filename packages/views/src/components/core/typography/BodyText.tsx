import { Text, styled } from "tamagui";
import { bodySize } from "./variants";

export const BodyText = styled(Text, {
  unstyled: true,
  fontWeight: "400",
  fontFamily: "$body",
  color: "#000",

  variants: {
    size: bodySize,
  } as const,

  defaultVariants: {
    size: "md",
  },
});
