import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const SETTINGS_DETAILS_SCREEN_ID = "0030";
export type SettingsDetailsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof SETTINGS_DETAILS_SCREEN_ID
>;

export const APP_THEME_SCREEN_ID = "0031";
export type AppThemeScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof APP_THEME_SCREEN_ID
>;
