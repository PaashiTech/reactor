import {
  TamaguiProvider,
  config,
  TestComponent,
  LinearGradientComponent,
} from "unmaze-views";

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
      <TestComponent />
      <LinearGradientComponent />
    </TamaguiProvider>
  );
}

export default App;
