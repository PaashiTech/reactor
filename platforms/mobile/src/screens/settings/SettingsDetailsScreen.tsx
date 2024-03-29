import { Pressable } from "react-native";
import { UnmzNavScreen } from "../types";
import {
  SETTINGS_DETAILS_SCREEN_ID,
  SettingsDetailsScreenProps,
} from "./types";
import {
  ListItem,
  View,
  CustomSwitch,
  SVGWrapper,
  HeadingText,
} from "@unmaze/views";
import { appPreferences, privacyAndSecurity } from "./settingOptions";
import { ChevronRight } from "@unmaze/assets";

const _SettingsDetailsScreen: React.FC<SettingsDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View flex={1}>
      <View mt={24} gap={20}>
        <View gap={12}>
          <HeadingText size="sm">App preferences</HeadingText>
          <View>
            {appPreferences.map((option) => {
              return (
                <Pressable
                  key={option.id}
                  android_ripple={{
                    borderless: false,
                    foreground: true,
                  }}
                  onPress={() => {
                    if (option.navigateTo) {
                      navigation.navigate(option.navigateTo, option.routeProps);
                    }
                  }}
                >
                  <ListItem
                    icon={option.icon}
                    iconAfter={<SVGWrapper iconSVG={ChevronRight} size="lg" />}
                    p={20}
                  >
                    {option.title}
                  </ListItem>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View gap={12}>
          <HeadingText size="sm">Privacy & Security</HeadingText>

          <View>
            {privacyAndSecurity.map((option) => {
              return (
                <Pressable
                  key={option.id}
                  android_ripple={
                    option.title !== "Biometrics"
                      ? {
                          borderless: false,
                          foreground: true,
                        }
                      : null
                  }
                  onPress={() => {}}
                >
                  <ListItem
                    icon={option.icon}
                    iconAfter={
                      option.showRightChevron === "switch" ? (
                        <CustomSwitch />
                      ) : option.showRightChevron ? (
                        <SVGWrapper iconSVG={ChevronRight} size="lg" />
                      ) : null
                    }
                    p={20}
                  >
                    {option.title}
                  </ListItem>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export const SettingsDetailsScreen: UnmzNavScreen = {
  key: SETTINGS_DETAILS_SCREEN_ID,
  title: "Settings",
  content: _SettingsDetailsScreen,
};
