/**
 * @name UnmzGradientButton
 *
 * @description
 * Button with a linear gradient of Unmaze brand colors
 */

import { Button, ButtonProps, Unspaced, isWeb } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export const UnmzGradientButton = Button.styleable<ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        alignSelf="center"
        color={"#262626"}
        borderRadius={9999}
        overflow="hidden"
        outlineWidth={0}
        borderWidth={0}
        focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
        pressStyle={{ outlineWidth: 0, borderWidth: 0 }}
        hoverStyle={{ outlineWidth: 0, borderWidth: 0 }}
        {...props}
        zIndex={0}
      >
        <Unspaced>
          <LinearGradient
            colors={["#fff000", "#ccfd62"]}
            locations={[0.05, 0.92]}
            start={[0.2, 1]}
            end={[1, 1]}
            position="absolute"
            fullscreen
            zIndex={0}
            // $platform-native={{ zIndex: -1 }}
            // $platform-web={{ zIndex: 0 }}
          />
        </Unspaced>
        {isWeb ? props.children : props.children}
      </Button>
    );
  }
);
