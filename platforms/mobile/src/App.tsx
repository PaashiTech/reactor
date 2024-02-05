import { TamaguiProvider, Text, tamaguiConfig } from "@unmaze/views";
import { StatusBar } from "react-native";
import EditNumberScreen from "./screens/EditNumberScreen";
import { ScreensTest1 } from "./playground/Screens";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <EditNumberScreen />
      {/* <Text>Your app here</Text> */}

      <ScreensTest1 />
    </TamaguiProvider>
  );
}

export default App;
