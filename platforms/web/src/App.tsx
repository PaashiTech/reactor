import { TamaguiProvider, Text } from "tamagui";
import config from "./config";
import { TestComponent, UnmzGradientButton } from "@unmaze/views";

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
      <Text>Some text is here</Text>
      <TestComponent />
      <UnmzGradientButton>
        <UnmzGradientButton.Text>Submit</UnmzGradientButton.Text>
      </UnmzGradientButton>
    </TamaguiProvider>
  );
}

export default App;
