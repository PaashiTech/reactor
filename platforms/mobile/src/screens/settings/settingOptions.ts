import { ReactElement } from "react";
import { Moon, Bell, Lock, Biometrics, Logout } from "@unmaze/assets";
import { StackRouteProps } from "../../navigation/navigators/types";
import { APP_THEME_SCREEN_ID } from "./types";

type SettingOptions = {
  id: number;
  title: string;
  icon: ReactElement;
  showRightChevron: boolean | "switch";
  navigateTo?: keyof StackRouteProps;
  routeProps?: any;
}[];

export const appPreferences: SettingOptions = [
  {
    id: 1,
    title: "App Theme",
    icon: Moon,
    showRightChevron: true,
    navigateTo: APP_THEME_SCREEN_ID,
  },
  {
    id: 2,
    title: "Notifications",
    icon: Bell,
    showRightChevron: true,
  },
];

export const privacyAndSecurity: SettingOptions = [
  {
    id: 1,
    title: "Change PIN",
    icon: Lock,
    showRightChevron: true,
  },
  {
    id: 2,
    title: "Biometrics",
    icon: Biometrics,
    showRightChevron: "switch",
  },
  {
    id: 3,
    title: "Logout",
    icon: Logout,
    showRightChevron: false,
  },
];
