import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BodyText, SVGWrapper, ShadowWrapper, View } from "@unmaze/views";
import { Dimensions, Pressable } from "react-native";

interface UnmazeBottomTabNavProps extends BottomTabBarProps {}

export const UnmazeBottomTabNav: React.FC<UnmazeBottomTabNavProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <ShadowWrapper size="md-top">
      <View flexDirection="row" justifyContent="space-between" bg="#fff">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          return (
            <View
              key={route.key}
              width={Dimensions.get("window").width / state.routes.length}
            >
              <Pressable
                onPress={() => navigation.navigate(route.name)}
                android_ripple={{
                  borderless: true,
                }}
              >
                <View alignItems="center" gap={8} paddingVertical={12}>
                  {options.tabBarIcon && (
                    <SVGWrapper
                      iconSVG={options.tabBarIcon}
                      svgColor={isFocused ? "#035E5D" : "#697077"}
                      size="lg"
                    />
                  )}
                  <BodyText size="sm" fontWeight={isFocused ? "600" : "400"}>
                    {options.tabBarLabel}
                  </BodyText>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ShadowWrapper>
  );
};
