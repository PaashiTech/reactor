import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaFrame,
} from "react-native-safe-area-context";
import { RootStackNavigator } from "./navigation/navigators/RootStackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { LogBox } from "react-native";

import firebase, {
  ReactNativeFirebase as RNFB,
} from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { FirebaseAuth } from "./playground/Firebase";
import { useCallback, useEffect, useState } from "react";

const fbCredentials = {
  clientId:
    "99359722785-uhtonb4m4kq0pkhj5h4uifmkpili8v0h.apps.googleusercontent.com",
  appId: "1:99359722785:android:b38431ff902e1ebc304260",
  apiKey: "AIzaSyAiGCgVLy6xUI_FKOMCUjoxTPahuDOJmjA",
  storageBucket: "unmaze-testapp-signup.appspot.com",
  projectId: "unmaze-testapp-signup",
  databaseURL:
    "https://unmaze-testapp-signup-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "99359722785",
};
// const fbAuthConfig = {
//   name: "FIREBASE_AUTH",
// };

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();
  const [fbAppInstance, setFbAppInstance] = useState<RNFB.FirebaseApp>();

  const createFbInstance = useCallback(async () => {
    try {
      if (!firebase.apps.length) {
        const fbApp = await firebase.initializeApp(fbCredentials);
        setFbAppInstance(fbApp);
        console.log(fbAppInstance);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    createFbInstance().catch(console.error);
  }, [createFbInstance]);

  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  if (!fontsLoaded) {
    return null;
  }

  const BaseTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FAF9F2",
    },
  };

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <UnmzToastProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              {/* <NavigationContainer theme={BaseTheme}>
                <RootStackNavigator />
              </NavigationContainer> */}
              <FirebaseAuth />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
