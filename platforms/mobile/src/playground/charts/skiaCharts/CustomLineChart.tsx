import { BodyText, Text, View } from "@unmaze/views";
import { DataType } from "./customLineChartData";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { curveBasis, line, scaleLinear, scalePoint } from "d3";
import {
  clamp,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import Gradient from "./Gradient";
import XAxis from "./XAxis";
import Cursor from "./Cursor";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { getYForX, parse } from "react-native-redash";

type CustomLineChartProps = {
  data: DataType[];
  chartHeight: number;
  chartMargin: number;
  chartWidth: number;
};

export const CustomLineChart: React.FC<CustomLineChartProps> = ({
  data,
  chartHeight,
  chartMargin,
  chartWidth,
}) => {
  const selectedValue = useSharedValue(0);
  const animationLine = useSharedValue(0);
  const animationGradient = useSharedValue({ x: 0, y: 0 });
  const cx = useSharedValue(0);
  const cy = useSharedValue(0);
  const cursorOpacity = useSharedValue(0);

  useEffect(() => {
    animationLine.value = withTiming(1, { duration: 1000 });
    animationGradient.value = withDelay(
      1000,
      withTiming({ x: 0, y: chartHeight }, { duration: 500 })
    );
  }, []);

  const xDomain = data.map((dataPoint) => dataPoint.label);

  const xRange = [chartMargin, chartWidth - chartMargin];

  const x = scalePoint().domain(xDomain).range(xRange).padding(0);

  const stepX = x.step();

  const max = Math.max(...data.map(({ value }) => value));
  const min = Math.min(...data.map(({ value }) => value));

  const yDomain = [min, max];
  const yRange = [chartHeight, 0];

  const y = scaleLinear().domain(yDomain).range(yRange);

  const curvedLine = line<DataType>()
    .x((d) => x(d.label)!)
    .y((d) => y(d.value))
    .curve(curveBasis)(data);

  const linePath = Skia.Path.MakeFromSVGString(curvedLine!);

  const path = parse(linePath!.toSVGString());

  const handleGestureEvent = (
    e:
      | GestureStateChangeEvent<PanGestureHandlerEventPayload>
      | GestureUpdateEvent<
          PanGestureHandlerEventPayload & PanGestureChangeEventPayload
        >
  ) => {
    "worklet";

    const index = Math.floor(e.absoluteX / stepX);
    const clampedDataIndex = Math.max(0, Math.min(index, data.length - 1));

    selectedValue.value = withTiming(data[clampedDataIndex].value, {
      duration: 250,
    });

    const clampValue = clamp(
      // For Snapping the cursor to data points
      // Math.floor(e.absoluteX / stepX) * stepX + chartMargin,
      e.absoluteX,
      chartMargin,
      chartWidth - chartMargin
    );
    cx.value = clampValue;
    cy.value = getYForX(path, Math.floor(clampValue))!;
  };

  const pan = Gesture.Pan()
    .onTouchesDown(() => {
      cursorOpacity.value = withTiming(1, { duration: 150 });
    })
    .onBegin(handleGestureEvent)
    .onChange(handleGestureEvent)
    .onTouchesUp(() => {
      cursorOpacity.value = withTiming(0, { duration: 150 });
    });

  return (
    <GestureDetector gesture={pan}>
      <Canvas
        style={{
          width: chartWidth,
          height: chartHeight,
        }}
      >
        <Path
          path={linePath!}
          style="stroke"
          strokeWidth={3}
          color="rgba(3, 94, 93,1)"
          strokeCap="round"
          start={0}
          end={animationLine}
        />
        <Gradient
          chartHeight={chartHeight}
          chartWidth={chartWidth}
          chartMargin={chartMargin}
          curvedLine={curvedLine!}
          animationGradient={animationGradient}
        />
        {data.map((dataPoint, i) => {
          return (
            <XAxis
              key={i}
              text={dataPoint.label}
              y={chartHeight - 10}
              x={x(dataPoint.label)!}
            />
          );
        })}
        <Cursor
          cx={cx}
          cy={cy}
          cursorOpacity={cursorOpacity}
          chartHeight={chartHeight}
          selectedValue={selectedValue}
        />
      </Canvas>
    </GestureDetector>
  );
};
