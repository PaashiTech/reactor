import { Text, useFont } from "@shopify/react-native-skia";

type XAxisProps = {
  x: number;
  y: number;
  text: string;
  isLast: boolean;
};

const XAxis: React.FC<XAxisProps> = ({ x, y, text, isLast }) => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 12);

  if (!font) {
    return null;
  }

  const fontSize = font.measureText(text);

  return (
    <Text
      text={text}
      color={"#6F6F6F"}
      font={font}
      x={isLast ? x - fontSize.width : x}
      y={y}
    />
  );
};

export default XAxis;
