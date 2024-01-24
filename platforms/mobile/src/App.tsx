import { ButtonComponent, config } from "@unmaze/views";
import { TamaguiProvider, Text, View } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { StatusBar } from "react-native";
import { Button } from "./UnmazeButton";
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
        <Button>
          <Button.Icon>
            <Plus />
          </Button.Icon>
          <Button.Text>Add number</Button.Text>
        </Button>
        <Button>
          <Button.Text>Continue</Button.Text>
        </Button>
        <Button>
          <Button.Text>Confirm</Button.Text>
        </Button>
      </View>
    </TamaguiProvider>
  );
}

export default App;
