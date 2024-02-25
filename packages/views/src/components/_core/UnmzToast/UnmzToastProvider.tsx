import { ToastProvider, ToastProviderProps } from "@tamagui/toast";
import { FC, PropsWithChildren } from "react";

export const UnmzToastProvider: FC<PropsWithChildren<ToastProviderProps>> = ({
  children,
  duration = 2000,
  swipeDirection = "horizontal",
}) => {
  return (
    <ToastProvider duration={duration} swipeDirection={swipeDirection}>
      {children}
    </ToastProvider>
  );
};
