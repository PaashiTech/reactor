import { View, Text } from "tamagui";

type TestComponentProps = {};

export default function TestComponent<TestComponentProps>() {
  return (
    <View
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Hello from TestComponent</Text>
    </View>
  );
}
