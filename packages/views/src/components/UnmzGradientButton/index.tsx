/**
 * @name UnmzGradientButton
 *
 * @description
 * Button with a linear gradient of Unmaze brand colors
 */

import { Button, ButtonProps } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export const UnmzGradientButton: React.FC<ButtonProps> = (props) => {
  const { alignSelf, ...restProps } = props;
  return (
    <LinearGradient
      colors={["#fff000", "#ccfd62"]}
      locations={[0.05, 0.92]}
      start={[0.2, 1]}
      end={[1, 1]}
      borderRadius={9999}
      alignSelf={alignSelf}
    >
      <Button
        backgroundColor="transparent"
        color={"#262626"}
        hoverStyle={{ backgroundColor: "transparent" }}
        pressStyle={{ backgroundColor: "transparent" }}
        {...restProps}
      >
        {props.children}
      </Button>
    </LinearGradient>
  );
};
