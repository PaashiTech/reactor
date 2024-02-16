import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { FamilyStackNavigator } from "./navigation";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <FamilyStackNavigator />
    </TamaguiProvider>
  );
}

export default App;
