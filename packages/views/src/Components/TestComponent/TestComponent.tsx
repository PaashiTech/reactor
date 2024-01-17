import { YStack, Text } from "tamagui";

type TestComponentProps = {};

export default function TestComponent<TestComponentProps>() {
  return (
    <YStack ai="center" jc="center">
      <Text>Hello from TestComponent1</Text>
    </YStack>
  );
}
