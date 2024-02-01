import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { UnmzButtonTest1 } from "./playground/Button";
import OtpScreen from "./screens/OtpScreen";
import { StatusBar } from "react-native";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar />
      <OtpScreen />
    </TamaguiProvider>
  );
}

export default App;
