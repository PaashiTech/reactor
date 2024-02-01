import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { ProfileDetailsTest1 } from "./playground/List";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <ProfileDetailsTest1 />
    </TamaguiProvider>
  );
}

export default App;
