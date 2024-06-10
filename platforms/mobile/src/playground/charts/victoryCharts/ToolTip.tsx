import { Circle, Path, Skia, Text } from "@shopify/react-native-skia";
import { useDerivedValue, type SharedValue } from "react-native-reanimated";

import React from "react";

type ToolTipProps = {
  x: SharedValue<number>;
  y: SharedValue<number>;
};

export const ToolTip: React.FC<ToolTipProps> = ({ x, y }) => {
  const path = useDerivedValue(() => {
    const dottedLine = Skia.Path.Make().lineTo(0, 300);

    const matrix = Skia.Matrix();
    matrix.translate(x.value, 0);
    dottedLine.transform(matrix);
    return dottedLine;
  });

  return (
    <>
      <Path
        path={path}
        color="rgba(3, 94, 93,1)"
        style="stroke"
        strokeWidth={0.8}
        strokeCap="round"
      />

      <Circle
        cx={x}
        cy={y}
        r={4}
        style="stroke"
        strokeWidth={4}
        color="rgba(3, 94, 93,1)"
      />
      <Circle cx={x} cy={y} r={2} style="fill" strokeWidth={2} color="#FFF" />
    </>
  );
};
