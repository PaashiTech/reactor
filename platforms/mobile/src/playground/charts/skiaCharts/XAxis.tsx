import React from "react";
import { DataType } from "./customLineChartData";
import XAxisLabel from "./XAxisLabel";
import { ScalePoint } from "d3";
import { Path, Skia } from "@shopify/react-native-skia";

type XAxisProps = {
  data: DataType[];
  x: ScalePoint<string>;
  chartWidth: number;
  chartHeight: number;
  chartMargin: number;
};

const XAxis: React.FC<XAxisProps> = ({
  data,
  x,
  chartHeight,
  chartMargin,
  chartWidth,
}) => {
  const xAxisLine = Skia.Path.Make().lineTo(chartWidth - 90, 0);

  const matrix = Skia.Matrix();
  matrix.translate(chartMargin, chartHeight - 25);
  xAxisLine.transform(matrix);

  return (
    <>
      <Path
        path={xAxisLine}
        color="#aeaeae"
        style="stroke"
        strokeWidth={0.7}
        strokeJoin={"round"}
      />
      {data.map((dataPoint, i) => {
        if (
          !(i == 0 || i == data.length - 1 || i == Math.floor(data.length / 2))
        )
          return;

        return (
          <XAxisLabel
            key={i}
            text={dataPoint.label}
            y={chartHeight - 10}
            x={x(dataPoint.label)!}
            isLast={i === data.length - 1}
          />
        );
      })}
    </>
  );
};

export default XAxis;
