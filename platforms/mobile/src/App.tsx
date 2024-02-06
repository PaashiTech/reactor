import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { ScreensTest1, ScreensTest2 } from "./playground/Screens";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}

      {/* <StatusBar /> */}

      {/* <Text>Your app here</Text> */}

      <ScreensTest2 />
    </TamaguiProvider>
  );
}

export default App;
