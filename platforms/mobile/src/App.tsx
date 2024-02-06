import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { ScreensTest1, ScreensTest2 } from "./playground/Screens";
import OtpScreen from "./screens/OtpScreen";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}

      {/* <StatusBar /> */}

      {/* <Text>Your app here</Text> */}

      {/* <ScreensTest2 /> */}
      <OtpScreen />
    </TamaguiProvider>
  );
}

export default App;
