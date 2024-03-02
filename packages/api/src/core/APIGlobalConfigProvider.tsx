import { SWRConfig } from "swr";
import NetInfo from "@react-native-community/netinfo";
import { AppState, AppStateStatus } from "react-native";
import { FC, PropsWithChildren } from "react";
import { useIsOnline } from "../hooks/useIsOnline";
import { MMKV } from "react-native-mmkv";
import { setupSWRCache } from "./swrCache";

const mmkvProvider = () => {
  const storage = new MMKV();
  const { swrCacheMap, persistCache } = setupSWRCache({
    set: storage.set.bind(storage),
    get: storage.getString.bind(storage),
  });

  AppState.addEventListener("change", function persistCacheOnAppBackground(s) {
    if (s === "background") {
      persistCache();
    }
  });

  return swrCacheMap;
};

export const APIGlobalConfigProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isOnline } = useIsOnline();

  return (
    <SWRConfig
      value={{
        provider: mmkvProvider,
        isOnline: () => {
          return isOnline;
        },
        isVisible: () => {
          return AppState.currentState === "active";
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              /**
               * Stricter check, conservative init focus -
               * no need to check if the app's current state is
               * either "inactive" or "background", do init focus stuff anyway
               */
              // appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // Subscribe to the app state change events
          const subscription = AppState.addEventListener(
            "change",
            onAppStateChange
          );

          return () => {
            if (subscription) {
              subscription.remove();
            }
          };
        },
        initReconnect(callback) {
          const unsubscribe = NetInfo.addEventListener((s) => {
            if (s.isInternetReachable && s.isConnected) {
              callback();
            }
          });

          return unsubscribe;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
