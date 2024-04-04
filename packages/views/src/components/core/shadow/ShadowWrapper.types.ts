export type ShadowSizeType =
  | "sm"
  | "md"
  | "md-top"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export enum ShadowColorType {
  onPrimary = "#035E5D",
  onSecondary = "#161616",
}

export type ShadowVariantType = {
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
};

export type ShadowStyleType = ShadowVariantType & {
  shadowColor: string;
};
