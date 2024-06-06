import { useFont, Text } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";
import { interpolate, useDerivedValue } from "react-native-reanimated";

import type { Graphs } from "../Model";
import { PADDING } from "../Model";

import type { GraphState } from "./Selection";

const sfMono = require("@tamagui/font-inter/otf/Inter-Medium.otf");

const format = (value: number) => {
  "worklet";
  return (
    "₹ " +
    Math.round(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
};

interface LabelProps {
  y: SharedValue<number>;
  state: SharedValue<GraphState>;
  graphs: Graphs;
  width: number;
  height: number;
}

export const Label = ({ state, y, graphs, width, height }: LabelProps) => {
  const titleFont = useFont(sfMono, 64);
  const subtitleFont = useFont(sfMono, 24);
  const translateY = height + PADDING;
  const AJUSTED_SIZE = height - PADDING * 2;
  const text = useDerivedValue(() => {
    const graph = graphs[state.value.current];
    return format(
      interpolate(
        y.value,
        [0, AJUSTED_SIZE],
        [graph.data.maxPrice, graph.data.minPrice]
      )
    );
  }, [y, state]);

  const titleX = useDerivedValue(() => {
    if (!titleFont) {
      return 0;
    }
    const graph = graphs[state.value.current];
    const title = format(graph.data.maxPrice);
    const titleWidth = titleFont.getTextWidth(title);
    return width / 2 - titleWidth / 2;
  }, [state, titleFont]);

  return (
    <>
      <Text
        x={titleX}
        y={translateY - 120}
        text={text}
        font={titleFont}
        color="#3a3636"
      />
    </>
  );
};
