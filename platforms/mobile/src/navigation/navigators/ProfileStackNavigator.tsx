import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { UnmzNavScreen } from "../../screens/types";
import { StackRouteProps } from "./types";

import { UserProfileScreen } from "../../screens/user-profile";
import { USER_PROFILE_SCREEN_ID } from "../../screens/user-profile/types";
import {
  EditEmailScreen,
  EditPhNumberScreen,
  ProfileDetailsScreen,
} from "../../screens/profile";
import {
  OTPAccountUpdateScreen,
  AccountUpdateSuccessScreen,
  OTPAccountVerificationScreen,
  ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
} from "../../screens/shared";
import {
  AddFamilyMemberScreen,
  FamilyDetailsScreen,
} from "../../screens/family";
import { SettingsDetailsScreen } from "../../screens/settings/SettingsDetailsScreen";
import { AppThemeScreen } from "../../screens/settings/AppThemeScreen";
import { AddSecondaryPhoneNumberScreen } from "../../screens/profile/AddSecondaryPhoneNumber";
import { LinkedAccountsScreen } from "../../screens/linked-accounts/LinkedAccountsScreen";
import { GiveConsentScreen } from "../../screens/linked-accounts/GiveConsentScreen";
import { StackContextProvider } from "./stackContext/StackContextProvider";
import { OTPFamilyMemberScreen } from "../../screens/family/OTPFamilyMemberScreen";
import {
  ADD_ACCOUNTS_SCREEN_ID,
  COMING_SOON_SCREEN_ID,
} from "../../screens/linked-accounts/types";
import { AddAccountsScreen } from "../../screens/linked-accounts/AddAccountsScreen";
import { ComingSoonScreen } from "../../screens/linked-accounts/ComingSoonScreen";

const profileScreens: UnmzNavScreen[] = [
  ProfileDetailsScreen,
  EditPhNumberScreen,
  EditEmailScreen,
  AddSecondaryPhoneNumberScreen,
];
const sharedScreens: UnmzNavScreen[] = [
  OTPAccountUpdateScreen,
  OTPAccountVerificationScreen,
  AccountUpdateSuccessScreen,
];
const familyScreens: UnmzNavScreen[] = [
  FamilyDetailsScreen,
  AddFamilyMemberScreen,
  OTPFamilyMemberScreen,
];
const linkedAccountsScreens: UnmzNavScreen[] = [
  LinkedAccountsScreen,
  GiveConsentScreen,
  AddAccountsScreen,
  ComingSoonScreen,
];
const settingsScreens: UnmzNavScreen[] = [
  SettingsDetailsScreen,
  AppThemeScreen,
];

export const ProfileStackNavigator = () => {
  const stackNav = createNativeStackNavigator<StackRouteProps>();
  return (
    <StackContextProvider>
      <stackNav.Navigator
        // initialRouteName={USER_PROFILE_SCREEN_ID}
        screenOptions={screenOptions}
      >
        {/* Profile section main screen */}
        {/* <stackNav.Screen
          name={UserProfileScreen.key as keyof StackRouteProps}
          component={UserProfileScreen.content}
          options={{ headerShown: false }}
        /> */}

        {/* Family screens group */}
        <stackNav.Group>
          {familyScreens.map((scr) => {
            return (
              <stackNav.Screen
                key={scr.key}
                name={scr.key as keyof StackRouteProps}
                component={scr.content}
                options={{
                  title: scr.title,
                }}
              />
            );
          })}
        </stackNav.Group>

        {/* Profile screens group */}
        <stackNav.Group>
          {profileScreens.map((scr) => {
            return (
              <stackNav.Screen
                key={scr.key}
                name={scr.key as keyof StackRouteProps}
                component={scr.content}
                options={{
                  title: scr.title,
                }}
              />
            );
          })}
        </stackNav.Group>

        {/* Setting screens group */}
        <stackNav.Group>
          {settingsScreens.map((scr) => {
            return (
              <stackNav.Screen
                key={scr.key}
                name={scr.key as keyof StackRouteProps}
                component={scr.content}
                options={{
                  title: scr.title,
                }}
              />
            );
          })}
        </stackNav.Group>

        {/* Linked Accounds screens group*/}
        <stackNav.Group>
          {linkedAccountsScreens.map((scr) => {
            return (
              <stackNav.Screen
                key={scr.key}
                name={scr.key as keyof StackRouteProps}
                component={scr.content}
                options={{
                  title: scr.title,
                }}
              />
            );
          })}
        </stackNav.Group>

        {/* Shared screens */}
        <stackNav.Group>
          {sharedScreens.map((scr) => {
            return (
              <stackNav.Screen
                key={scr.key}
                name={scr.key as keyof StackRouteProps}
                component={scr.content}
                options={{
                  title: scr.title,
                  headerShown: scr.key !== ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
                  headerStyle:
                    scr.title === "Verification Success"
                      ? {
                          backgroundColor: "transparent",
                        }
                      : {},
                }}
              />
            );
          })}
        </stackNav.Group>
      </stackNav.Navigator>
    </StackContextProvider>
  );
};
