import { SWRConfig } from "swr";
import { AppState } from "react-native";
import { FC, PropsWithChildren } from "react";

export const APIGlobalConfigProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
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
            subscription.remove();
          };
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
