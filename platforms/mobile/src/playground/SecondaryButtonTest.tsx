import { View, XStack, YStack } from "@unmaze/views";
import {
  SecondaryButton,
  TertiaryButton,
  UnmzGradientButton,
} from "@unmaze/views/src/components";
import { PlaceholderIcon, PlaceholderIconDisabled } from "@unmaze/assets";
export const SecondaryButtonTest = () => {
  return (
    <View flex={1} ai="center" marginTop={50}>
      <XStack gap={40}>
        <View gap={10} ai="center">
          <UnmzGradientButton
            icon={PlaceholderIcon}
            iconAfter={PlaceholderIcon}
          >
            Submit
          </UnmzGradientButton>
          <SecondaryButton
            icon={<PlaceholderIcon />}
            iconAfter={<PlaceholderIcon />}
            onPress={() => alert("Secondary Pressed")}
          >
            Submit
          </SecondaryButton>
          <TertiaryButton icon={PlaceholderIcon} iconAfter={PlaceholderIcon}>
            Submit
          </TertiaryButton>
        </View>
        <View gap={10} ai="center">
          <UnmzGradientButton
            icon={PlaceholderIconDisabled}
            iconAfter={PlaceholderIconDisabled}
            disabled
          >
            Submit
          </UnmzGradientButton>
          <SecondaryButton
            icon={<PlaceholderIconDisabled />}
            iconAfter={<PlaceholderIconDisabled />}
            disabled
          >
            Submit
          </SecondaryButton>
          <TertiaryButton
            disabled
            icon={PlaceholderIconDisabled}
            iconAfter={PlaceholderIconDisabled}
          >
            Submit
          </TertiaryButton>
        </View>
      </XStack>
      <XStack gap={40} marginTop={40}>
        <View gap={10} ai="center">
          <UnmzGradientButton>Submit</UnmzGradientButton>
          <SecondaryButton onPress={() => alert("Secondary Pressed")}>
            Submit
          </SecondaryButton>
          <TertiaryButton>Submit</TertiaryButton>
        </View>
        <View gap={10} ai="center">
          <UnmzGradientButton disabled>Submit</UnmzGradientButton>
          <SecondaryButton disabled>Submit</SecondaryButton>
          <TertiaryButton disabled>Submit</TertiaryButton>
        </View>
      </XStack>
      <YStack padding={20} paddingTop={40} gap={10} alignSelf="stretch">
        <UnmzGradientButton icon={PlaceholderIcon} iconAfter={PlaceholderIcon}>
          Submit
        </UnmzGradientButton>
        <SecondaryButton
          icon={<PlaceholderIcon />}
          iconAfter={<PlaceholderIcon />}
          onPress={() => alert("Secondary Pressed")}
        >
          Submit
        </SecondaryButton>
        <TertiaryButton icon={PlaceholderIcon} iconAfter={PlaceholderIcon}>
          Submit
        </TertiaryButton>
      </YStack>
    </View>
  );
};
