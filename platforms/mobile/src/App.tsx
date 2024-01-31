import {
  Button,
  TamaguiProvider,
  View,
  tamaguiConfig,
  UnmzGradientButton,
  ButtonIcon,
} from "@unmaze/views";
import { StatusBar } from "react-native";
import { Plus } from "@tamagui/lucide-icons";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      <View
        flex={1}
        jc={"center"}
        bg="$background"
        gap={"$4"}
        paddingHorizontal={24}
      >
        <StatusBar backgroundColor={"black"} />
        <Button>Button</Button>
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
        <UnmzGradientButton>Confirm</UnmzGradientButton>
      </View>
    </TamaguiProvider>
  );
}

export default App;
