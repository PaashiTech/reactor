import { TamaguiProvider, Text } from "tamagui";
import config from "./config";
import { TestComponent } from "@unmaze/views";

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
      <Text>Some text is here</Text>
      <TestComponent />
    </TamaguiProvider>
  );
}

export default App;
