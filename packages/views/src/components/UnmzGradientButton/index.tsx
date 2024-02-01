/**
 * @name UnmzGradientButton
 *
 * @description
 * Button with a linear gradient of Unmaze brand colors
 */

import { Button, Unspaced } from "tamagui";
import { UnmzButtonStyles, UnmzLinearGradientStyles } from "./styles";
import { LinearGradient } from "@tamagui/linear-gradient";

export const UnmzGradientButton = Button.styleable((props, ref) => {
  return (
    <Button size="$4" ref={ref} {...UnmzButtonStyles} {...props}>
      <Button.Text zIndex={1} fontWeight={"600"}>
        {props.children}
      </Button.Text>
      <Unspaced>
        <LinearGradient
          {...UnmzLinearGradientStyles}
          fullscreen
          $platform-native={{ zIndex: -1 }}
          $platform-web={{ zIndex: 0 }}
        />
      </Unspaced>
    </Button>
  );
});
