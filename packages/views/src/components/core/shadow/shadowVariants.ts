import { ShadowSizeType, ShadowVariantType } from "./ShadowWrapper.types";

export const shadowVariants: Record<ShadowSizeType, ShadowVariantType> = {
  sm: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  md: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  "md-top": {
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  lg: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 24,
  },
  xl: {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 32,
  },
  "2xl": {
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.24,
    shadowRadius: 48,
  },
  "3xl": {
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.28,
    shadowRadius: 64,
  },
};
