import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import OtpScreen from "./screens/OtpScreen";
import { StatusBar } from "react-native";
import { ProfileDetailsTest1 } from "./playground/List";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      {/* <OtpScreen /> */}
      <ProfileDetailsTest1 />
    </TamaguiProvider>
  );
}

export default App;
