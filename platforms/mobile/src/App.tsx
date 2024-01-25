import { config } from "@unmaze/views";
import { TamaguiProvider, View } from "tamagui";
import { StatusBar } from "react-native";
import { UnmzGradientButton } from "@unmaze/views";
import { Plus } from "@tamagui/lucide-icons";

export function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {/* your app here */}
      <View
        flex={1}
        jc={"center"}
        bg="$background"
        gap={"$4"}
        paddingHorizontal={24}
      >
        <StatusBar backgroundColor={"black"} />
        {/* <ButtonComponent>Add number</ButtonComponent> */}
        <UnmzGradientButton>
          <UnmzGradientButton.Icon>
            <Plus />
          </UnmzGradientButton.Icon>
          <UnmzGradientButton.Text>Add number</UnmzGradientButton.Text>
        </UnmzGradientButton>
        <UnmzGradientButton>
          <UnmzGradientButton.Text>Continue</UnmzGradientButton.Text>
        </UnmzGradientButton>
        <UnmzGradientButton>
          <UnmzGradientButton.Text>Confirm</UnmzGradientButton.Text>
        </UnmzGradientButton>
      </View>
    </TamaguiProvider>
  );
}

export default App;
