import { TamaguiProvider, Text, tamaguiConfig } from "@unmaze/views";
import { StatusBar } from "react-native";
import EditNumberScreen from "./screens/EditNumberScreen";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <EditNumberScreen />
    </TamaguiProvider>
  );
}

export default App;
