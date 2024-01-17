import { TamaguiProvider, config, TestComponent } from "unmaze-views";

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
      <TestComponent />
    </TamaguiProvider>
  );
}

export default App;
