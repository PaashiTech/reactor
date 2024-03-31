import {
  Avatar,
  ListItem,
  Text,
  View,
  XStack,
  SVGWrapper,
  useUserStore,
  computeUserFullName,
  BodyText,
  AccentText,
  ShadowWrapper,
} from "@unmaze/views";
import { Pressable } from "react-native";
import {
  ChevronRight,
  LogoWithUnmaze,
  Twitter,
  LinkedIn,
  Instagram,
} from "@unmaze/assets";
import { userProfileOptions } from "./userProfileOptions";
import { USER_PROFILE_SCREEN_ID, UserProfileScreenProps } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { UnmzNavScreen } from "../types";

const _UserProfileScreen: React.FC<UserProfileScreenProps> = ({
  navigation,
  route,
}) => {
  const name = useUserStore((state) => state.name);
  const pan = useUserStore((state) => state.pan);
  const primaryPh = useUserStore((state) => state.phone.primary);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1}>
        <ShadowWrapper size="sm">
          <View flexDirection="row" gap={16} padding={20} bg="#fff">
            <Avatar circular size="$6">
              <Avatar.Fallback ai="center" jc="center" bg="#035E5D">
                <Text
                  fontSize={24}
                  fontWeight="$7"
                  color="#fff"
                  letterSpacing={0.48}
                >
                  {name.first[0].toUpperCase() + name.last[0].toUpperCase()}
                </Text>
              </Avatar.Fallback>
            </Avatar>
            <View>
              <BodyText>{computeUserFullName(name)}</BodyText>
              <BodyText>{pan}</BodyText>
              <BodyText>{"+91-" + primaryPh}</BodyText>
            </View>
          </View>
        </ShadowWrapper>
        <View paddingHorizontal={20} paddingVertical={24}>
          <ShadowWrapper size="sm">
            <View marginVertical={8} borderRadius={16} overflow="hidden">
              {userProfileOptions.map((option) => {
                return (
                  <Pressable
                    key={option.id}
                    android_ripple={{
                      borderless: false,
                      foreground: true,
                    }}
                    onPress={() => {
                      if (option.navigateTo) {
                        navigation.navigate(
                          option.navigateTo,
                          option.routeProps
                        );
                      }
                    }}
                  >
                    <ListItem
                      icon={option.icon}
                      iconAfter={<SVGWrapper iconSVG={ChevronRight} />}
                      p={20}
                    >
                      {option.title}
                    </ListItem>
                  </Pressable>
                );
              })}
            </View>
          </ShadowWrapper>
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
            <AccentText size="sm" color="#161616">
              {`T&C  •  Privay Policy`}
            </AccentText>
            <AccentText size="sm" color="#161616">
              version 1.1.2
            </AccentText>
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
