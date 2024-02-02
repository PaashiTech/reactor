import { Plus } from "@tamagui/lucide-icons";
import { UnmzGradientButton } from "@unmaze/views";
import { Text, View } from "@unmaze/views";

export const ButtonTest1 = () => {
  return (
    <View gap="$4">
      <Text>Some text is here</Text>
      <UnmzGradientButton
        size={"$4"}
        icon={<Plus zIndex={1} />}
        alignSelf="center"
        onPress={() => {
          alert("Hello!");
        }}
      >
        Add number
      </UnmzGradientButton>
    </View>
  );
};
