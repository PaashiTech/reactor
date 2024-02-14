import {
  CustomToast,
  PortalProvider,
  TamaguiProvider,
  View,
  tamaguiConfig,
} from "@unmaze/views";
// import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";
import { ToastProvider, ToastViewport } from "@tamagui/toast";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <PortalProvider>
        <ToastProvider native={["mobile"]}>
          <View flex={1} jc={"center"} ai={"center"}>
            <CustomToast />
          </View>
          <ToastViewport />
        </ToastProvider>
      </PortalProvider>
    </TamaguiProvider>
  );
}

export default App;
