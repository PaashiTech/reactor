import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { UnmzButtonTest1 } from "./playground/Button";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <UnmzButtonTest1 />
    </TamaguiProvider>
  );
}

export default App;
