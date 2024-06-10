import { View } from "@unmaze/views";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import { data } from "../skiaCharts/customLineChartData";
import { formatAmount } from "../helpers";
import { ToolTip } from "./ToolTip";

export const VictoryLineChart = () => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 12);
  const { state, isActive } = useChartPressState({
    x: "someting",
    y: { value: 0 },
  });

  const CHART_HEIGHT = 300;
  const CHART_MARGIN = 20;

  const { width: CHART_WIDTH } = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          height: CHART_HEIGHT,
          width: CHART_WIDTH,
          paddingHorizontal: CHART_MARGIN,
          marginTop: 40,
        }}
      >
        <CartesianChart
          padding={12}
          data={data} // 👈 specify your data
          xKey="label" // 👈 specify data key for x-axis
          yKeys={["value"]} // 👈 specify data keys used for y-axis
          chartPressState={state}
          gestureLongPressDelay={1}
          axisOptions={{
            font,
            axisSide: { y: "right", x: "bottom" },
            labelOffset: 5,
            lineColor: {
              grid: {
                x: "transparent",
                y: "rgba(145, 145, 145, 0.5)",
              },
              frame: "rgba(145, 145, 145, 0.5)",
            },
            formatYLabel: formatAmount,
            tickCount: { x: 3, y: 5 },
          }}
        >
          {/* 👇 render function exposes various data, such as points. */}
          {({ points, chartBounds }) => (
            // 👇 and we'll use the Line component to render a line path.
            <>
              <Line
                points={points.value}
                color="rgba(3, 94, 93,1)"
                strokeWidth={2}
                curveType="natural"
              />
              <Area
                points={points.value}
                y0={chartBounds.bottom}
                curveType="natural"
                animate={{ type: "timing", duration: 500 }}
              >
                <LinearGradient
                  start={vec(chartBounds.top, 0)}
                  end={vec(chartBounds.bottom, chartBounds.bottom)}
                  colors={["rgba(3, 94, 93, 0.4)", "rgba(3, 94, 93, 0)"]}
                />
              </Area>
              {isActive ? (
                <ToolTip x={state.x.position} y={state.y.value.position} />
              ) : null}
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
};
