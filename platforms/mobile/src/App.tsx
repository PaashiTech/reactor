import {
  TamaguiProvider,
  tamaguiConfig,
  CountdownTimer,
  View,
} from "@unmaze/views";
import { UnmzButtonTest1 } from "./playground/Button";
import { StatusBar } from "react-native";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar backgroundColor={"#fff000"} barStyle="dark-content" />
      <UnmzButtonTest1 />
    </TamaguiProvider>
  );
}

export default App;
