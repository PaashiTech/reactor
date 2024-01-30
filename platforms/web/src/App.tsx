import { TamaguiProvider, Text, Button, View, ButtonProps } from "tamagui";
import config from "./config";
import { TestComponent, UnmzGradientButton } from "@unmaze/views";
import { LinearGradient } from "tamagui/linear-gradient";

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
      <View space="$4">
        <Text>Some text is here</Text>
        <TestComponent />
        {/* <UnmzGradientButton>
        <UnmzGradientButton.Text>Submit</UnmzGradientButton.Text>
      </UnmzGradientButton> */}
        <UnmzGradientButton size={"$5"} alignSelf="center">
          Add number
        </UnmzGradientButton>
        <Button size={"$5"} alignSelf="center" borderRadius={9999}>
          Add number
        </Button>
      </View>
    </TamaguiProvider>
  );
}

export default App;
