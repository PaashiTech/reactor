/**
 * @name TertiaryButton
 *
 * @description
 * Tertiary button from Unmaze Design system
 */

import { Button, styled } from "tamagui";

export const TertiaryButton = styled(Button, {
  color: "#262626",
  unstyled: true,
  fontSize: 14,
  letterSpacing: 0.28,
  paddingHorizontal: 24,
  backgroundColor: "#fff",
  scaleSpace: 0.39,
  height: 42,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
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
