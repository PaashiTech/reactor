import { createFont } from "tamagui";

export const fonts = {
  body: createFont({
    family: "Satoshi",
    size: {
      1: 10,
      2: 12,
      3: 14,
      4: 16,
      5: 20,
      6: 24,
    },
    letterSpacing: {
      1: 10 * 0.02,
      2: 12 * 0.02,
      3: 14 * 0.02,
      4: 16 * 0.02,
      5: 20 * 0.02,
      6: 24 * 0.02,
    },
    weight: {
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
    },
    lineHeight: {
      1: 14,
      2: 16,
      3: 18,
      4: 20,
      5: 24,
      6: 28,
    },
    face: {
      "300": { normal: "SatoshiLight" },
      "400": { normal: "SatoshiRegular" },
      "500": { normal: "SatoshiMedium" },
      "600": { normal: "SatoshiSemibold" },
      "700": { normal: "SatoshiBold" },
    },
  }),

  heading: createFont({
    family: `Satoshi`,
    size: {
      2: 16,
      3: 20,
      4: 24,
      5: 28,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 66,
    },
    letterSpacing: {},
    lineHeight: {
      2: 1.5 * 16,
      3: 1.5 * 20,
      4: 1.5 * 24,
      5: 1.5 * 28,
      6: 1.5 * 32,
      7: 1.5 * 40,
      8: 1.5 * 48,
      9: 1.5 * 56,
      10: 1.5 * 66,
    },
    transform: {
      5: "uppercase",
      6: "none",
    },
    weight: {
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
    },
    face: {
      "300": { normal: "SatoshiLight" },
      "400": { normal: "SatoshiRegular" },
      "500": { normal: "SatoshiMedium" },
      "600": { normal: "SatoshiSemibold" },
      "700": { normal: "SatoshiBold" },
    },
  }),
};
