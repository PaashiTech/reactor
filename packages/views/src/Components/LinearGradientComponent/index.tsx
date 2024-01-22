import { Text, View } from "@tamagui/core";
import { LinearGradient } from "tamagui/linear-gradient";

type LinearGradientComponentProps = {};

export default function LinearGradientComponent<
  LinearGradientComponentProps
>() {
  return (
    <LinearGradient flex={1} colors={["aqua", "magenta"]}>
      <View
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontFamily={"$body"}>Hello from LinearGradientComponent!</Text>
      </View>
    </LinearGradient>
  );
}
