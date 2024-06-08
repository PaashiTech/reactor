import { Text, useFont } from "@shopify/react-native-skia";

type XAxisProps = {
  x: number;
  y: number;
  text: string;
};

const XAxis: React.FC<XAxisProps> = ({ x, y, text }) => {
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
      x={x - fontSize.width / 2}
      y={y}
    />
  );
};

export default XAxis;
