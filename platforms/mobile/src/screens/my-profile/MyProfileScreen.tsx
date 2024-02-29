import { Avatar, ListItem, Text, View, XStack } from "@unmaze/views";
import { Pressable } from "react-native";
import {
  ChevronRight,
  LogoWithUnmaze,
  Twitter,
  LinkedIn,
  Instagram,
} from "@unmaze/assets";
import { myProfileOptions } from "./myProfileOptions";
import { USER_PROFILE_SCREEN_ID, UserProfileScreenProps } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { UnmzNavScreen } from "../types";

const _UserProfileScreen: React.FC<UserProfileScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1}>
        <View
          flexDirection="row"
          gap={16}
          padding={20}
          bg="#fff"
          elevationAndroid={4}
        >
          <Avatar circular size="$6">
            <Avatar.Fallback ai="center" jc="center" bg="#035E5D">
              <Text
                fontSize={24}
                fontWeight="$7"
                color="#fff"
                letterSpacing={0.48}
              >
                PS
              </Text>
            </Avatar.Fallback>
          </Avatar>
          <View>
            <Text>Piyush Dhananhaya Sathe</Text>
            <Text>DJFPD8191A</Text>
            <Text>+91-8327812999</Text>
          </View>
        </View>
        <View paddingHorizontal={20} paddingVertical={24}>
          <View
            marginVertical={8}
            borderRadius={16}
            elevationAndroid={2}
            overflow="hidden"
          >
            {myProfileOptions.map((option) => {
              return (
                <Pressable
                  key={option.id}
                  android_ripple={{
                    borderless: false,
                    foreground: true,
                  }}
                  onPress={() => {
                    if (option.navigateTo) {
                      // navigation.navigate(option.navigateTo);
                    }
                  }}
                >
                  <ListItem icon={option.icon} iconAfter={ChevronRight} p={20}>
                    {option.title}
                  </ListItem>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View p={24} gap={20}>
          <View alignItems="center" gap={24}>
            <LogoWithUnmaze />
            <XStack gap={24}>
              <LinkedIn />
              <Instagram />
              <Twitter />
            </XStack>
          </View>
          <XStack justifyContent="space-between">
            <Text fontSize={12} color="#161616" fontWeight="500">
              {`T&C  •  Privay Policy`}
            </Text>
            <Text fontSize={12} color="#161616" fontWeight="500">
              version 1.1.2
            </Text>
          </XStack>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const UserProfileScreen: UnmzNavScreen = {
  key: USER_PROFILE_SCREEN_ID,
  title: "User profile",
  content: _UserProfileScreen,
};
