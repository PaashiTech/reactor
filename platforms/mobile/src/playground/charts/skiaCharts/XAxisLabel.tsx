import { Text, useFont } from "@shopify/react-native-skia";

type XAxisLabelProps = {
  x: number;
  y: number;
  text: string;
  isLast: boolean;
};

const XAxisLabel: React.FC<XAxisLabelProps> = ({ x, y, text, isLast }) => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 11);

  if (!font) {
    return null;
  }

  const fontSize = font.measureText(text);

  return (
    <Text
      text={text}
      color={"#aeaeae"}
      font={font}
      x={isLast ? x - fontSize.width : x}
      y={y}
    />
  );
};

export default XAxisLabel;
