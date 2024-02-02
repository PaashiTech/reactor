import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import OtpScreen from "./screens/OtpScreen";
import { StatusBar } from "react-native";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <OtpScreen />
    </TamaguiProvider>
  );
}

export default App;
