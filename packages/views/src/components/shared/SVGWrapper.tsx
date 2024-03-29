import { SvgProps } from "@unmaze/assets";
// import { ViewProps } from "react-native";

type sizeType = "sm" | "md" | "lg";

type SVGWrapperProps = {
  iconSVG: React.FC<SvgProps>;
  svgColor?: string;
  size?: sizeType;
};

export const SVGWrapper: React.FC<SVGWrapperProps> = ({
  iconSVG: IconSVG,
  svgColor = "#697077",
  size = "lg",
}) => {
  const pxSize = size === "lg" ? 24 : size === "md" ? 20 : 16;

  return (
    //@ts-ignore
    <IconSVG style={{ color: svgColor }} height={pxSize} width={pxSize} />
  );
};
