import { LinearGradient, LinearGradientProps } from "@tamagui/linear-gradient";

export const UnmzLinearGradient: React.FC<LinearGradientProps> = (props) => {
  const { colors, ...restProps } = props;
  return (
    <LinearGradient
      colors={colors || ["#fff000", "#cdfd62"]}
      locations={[0, 0.8854]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...restProps}
    >
      {props.children}
    </LinearGradient>
  );
};
