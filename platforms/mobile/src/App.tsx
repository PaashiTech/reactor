import { config, TestComponent, LinearGradientComponent } from "@unmaze/views";
import { TamaguiProvider, View, Button } from "tamagui";

export function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {/* your app here */}
      <TestComponent />
      <LinearGradientComponent />
    </TamaguiProvider>
  );
}

export default App;
