/**
 * @name TertiaryButton
 *
 * @description
 * Tertiary button from Unmaze Design system
 */

import { Button, styled } from "tamagui";

export const TertiaryButton = styled(Button, {
  color: "#262626",
  fontSize: 14,
  letterSpacing: 0.28,
  paddingVertical: 12,
  paddingHorizontal: 24,
  backgroundColor: "#fff",
  fontWeight: "500",
  borderWidth: 1,
  borderColor: "#E7E7E7",
  borderRadius: 9999,
  variants: {
    disabled: {
      true: {
        color: "#CAC5C4",
      },
    },
  },
  pressStyle: {
    backgroundColor: "#fff",
  },
});
