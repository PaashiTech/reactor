import {
  tamaguiConfig,
  TamaguiProvider,
  Text,
  Button,
  View,
  TestComponent,
  UnmzGradientButton,
} from "@unmaze/views";
import { Plus } from "@tamagui/lucide-icons";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <View gap="$4">
        <Text>Some text is here</Text>
        <TestComponent />
        <UnmzGradientButton
          size={"$4"}
          icon={<Plus zIndex={1} />}
          alignSelf="center"
        >
          Add number
        </UnmzGradientButton>
        <Button size={"$5"} alignSelf="center" borderRadius={9999}>
          Add number
        </Button>
      </View>
    </TamaguiProvider>
  );
}

export default App;
