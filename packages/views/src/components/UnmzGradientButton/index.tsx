/**
 * @name UnmzGradientButton
 *
 * @description
 * Button with a linear gradient of Unmaze brand colors
 */

import { Button, ButtonProps, Unspaced } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { ButtonStyles, GradientStyles } from "./styles";

export const UnmzGradientButton = Button.styleable<ButtonProps>(
  (props, ref) => {
    return (
      <Button size="$4" ref={ref} style={ButtonStyles} {...props}>
        <Button.Text zIndex={1} fontWeight={"600"}>
          {props.children}
        </Button.Text>
        {!props.disabled && (
          <Unspaced>
            <LinearGradient
              style={GradientStyles}
              $platform-native={{ zIndex: -1 }}
              $platform-web={{ zIndex: 0 }}
            />
          </Unspaced>
        )}
      </Button>
    );
  }
);
