/**
 * @name UnmzGradientButton
 *
 * @description
 * Button with a linear gradient of Unmaze brand colors
 */

import { Button, ButtonProps, Unspaced } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export const UnmzGradientButton = Button.styleable((props, ref) => {
  return (
    <Button
      ref={ref}
      alignSelf="center"
      color={"#262626"}
      borderRadius={9999}
      overflow="hidden"
      {...props}
    >
      <Unspaced>
        <LinearGradient
          colors={["#fff000", "#ccfd62"]}
          locations={[0.05, 0.92]}
          start={[0.2, 1]}
          end={[1, 1]}
          position="absolute"
          fullscreen
        />
      </Unspaced>

      <Button.Icon>{props.icon}</Button.Icon>
      <Button.Text zIndex={1}>{props.children}</Button.Text>
    </Button>
  );
});
