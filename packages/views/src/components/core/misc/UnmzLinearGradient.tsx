import { LinearGradient, LinearGradientProps } from "@tamagui/linear-gradient";

export const UnmzLinearGradient: React.FC<LinearGradientProps> = (props) => {
  return (
    <LinearGradient
      colors={["#fff000", "#cdfd62"]}
      locations={[0, 0.8854]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...props}
    >
      {props.children}
    </LinearGradient>
  );
};
