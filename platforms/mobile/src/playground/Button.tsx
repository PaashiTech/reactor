import { Button, View, UnmzGradientButton } from "@unmaze/views";

import { Check, Plus } from "@tamagui/lucide-icons";

const UnmzButtonTest1 = () => {
  return (
    <View
      flex={1}
      jc={"center"}
      bg="$background"
      gap={"$4"}
      paddingHorizontal={24}
    >
      {/* Default Tamagui button */}
      <Button>Default Button</Button>

      {/* Unmaze buttons with gradient */}
      <UnmzGradientButton
        onPress={() => {
          alert("Pressed");
        }}
        scaleSpace={0.5}
        icon={<Plus />}
        scaleIcon={1.25}
      >
        Add number
      </UnmzGradientButton>

      <UnmzGradientButton>Continue</UnmzGradientButton>

      <UnmzGradientButton iconAfter={<Check />}>Confirm</UnmzGradientButton>
    </View>
  );
};

export { UnmzButtonTest1 };
