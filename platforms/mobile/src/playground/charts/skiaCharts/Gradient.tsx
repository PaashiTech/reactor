import { LinearGradient, Path, Skia } from "@shopify/react-native-skia";
import { SharedValue } from "react-native-reanimated";

type GradientProps = {
  chartHeight: number;
  chartWidth: number;
  chartMargin: number;
  curvedLine: string;
  animationGradient: SharedValue<{ x: number; y: number }>;
};

const Gradient: React.FC<GradientProps> = ({
  chartHeight,
  chartMargin,
  chartWidth,
  curvedLine,
  animationGradient,
}) => {
  const getGradient = (chartLine: string, width: number, height: number) => {
    const gradientAreaSplit = Skia.Path.MakeFromSVGString(chartLine);

    if (gradientAreaSplit) {
      gradientAreaSplit
        .lineTo(width - chartMargin, height)
        .lineTo(chartMargin, height)
        .lineTo(chartMargin, gradientAreaSplit.getPoint(0).y);
    }

    return gradientAreaSplit;
  };

  return (
    <Path
      path={getGradient(curvedLine!, chartWidth, chartHeight)!}
      color="pink"
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={animationGradient}
        colors={["rgba(3, 94, 93, 0.2)", "rgba(3, 94, 93, 0)"]}
      />
    </Path>
  );
};

export default Gradient;
