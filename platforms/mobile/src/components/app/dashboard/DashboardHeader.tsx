import {
  AccentText,
  Circle,
  HeadingText,
  View,
  XStack,
  YStack,
  useUserStore,
} from "@unmaze/views";

export const DashboardHeader = () => {
  const name = useUserStore((state) => state.name);
  return (
    <View mt={24}>
      <XStack justifyContent="space-between" alignItems="center">
        <YStack gap={4}>
          <HeadingText size="lg" color="#262626">
            Hey {name.first}
          </HeadingText>
          <AccentText size="md" color="#6F6F6F">
            Welcome to Unmaze
          </AccentText>
        </YStack>
        <Circle
          bg="#FFF"
          width={36}
          aspectRatio={"1/1"}
          borderColor="#E7E7E7"
          borderWidth={1.5}
        >
          <AccentText size="lg">{name.first[0].toUpperCase()}</AccentText>
        </Circle>
      </XStack>
    </View>
  );
};
