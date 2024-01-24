import { LinearGradient } from "tamagui/linear-gradient";
import { View, Text } from "tamagui";

interface ButtonComponentProps {}

const ButtonComponent = ({ children }) => {
  return (
    <LinearGradient
      px={24}
      py={12}
      borderRadius={49}
      als={"center"}
      colors={["#fff000", "#ccfd62"]}
      start={{ x: 0.2, y: 1 }}
      end={{ x: 1, y: 1 }}
      locations={[0.05, 0.92]}
    >
      <View fd={"row"} gap={4} ai={"center"}>
        <Text fontSize={16}>{children}</Text>
      </View>
    </LinearGradient>
  );
};

export default ButtonComponent;
