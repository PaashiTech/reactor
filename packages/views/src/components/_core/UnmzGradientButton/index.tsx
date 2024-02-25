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
    <Button
      ref={ref}
      {...UnmzButtonStyles}
      backgroundColor="#E7E7E7"
      {...props}
    >
      <Button.Text
        zIndex={1}
        fontWeight="600"
        fontSize={14}
        letterSpacing={0.28}
        color={props.disabled ? "#CAC5C4" : "#262626"}
      >
        {props.children}
      </Button.Text>
      {!props.disabled && (
        <Unspaced>
          <LinearGradient
            {...UnmzLinearGradientStyles}
            fullscreen
            $platform-native={{ zIndex: -1 }}
            $platform-web={{ zIndex: 0 }}
          />
        </Unspaced>
      )}
    </Button>
  );
});
