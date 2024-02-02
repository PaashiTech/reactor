import { TamaguiProvider, Text, tamaguiConfig } from "@unmaze/views";
import { StatusBar } from "react-native";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Text>Your app here</Text>
    </TamaguiProvider>
  );
}

export default App;
