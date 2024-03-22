import { Button, ShadowWrapper, Text, View, XStack } from "@unmaze/views";
import { useState } from "react";
import { StatusBar } from "react-native";

export type ShadowSizeType =
  | "sm"
  | "md"
  | "md-top"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export const Shadows: React.FC = () => {
  const [size, setSize] = useState<ShadowSizeType>("sm");
  return (
    <View flex={1}>
      <StatusBar />
      <View padding={20}>
        <XStack flexWrap="wrap" gap={14}>
          <Button onPress={() => setSize("sm")}>sm</Button>
          <Button onPress={() => setSize("md")}>md</Button>
          <Button onPress={() => setSize("md-top")}>md-top</Button>
          <Button onPress={() => setSize("lg")}>lg</Button>
          <Button onPress={() => setSize("xl")}>xl</Button>
          <Button onPress={() => setSize("2xl")}>2xl</Button>
          <Button onPress={() => setSize("3xl")}>3xl</Button>
        </XStack>
      </View>
      <View marginTop={50} padding={50}>
        <ShadowWrapper size={size}>
          <View
            bg={"#fff"}
            paddingVertical={60}
            borderRadius={20}
            overflow="hidden"
          >
            <Text textAlign="center">Shadow - {size}</Text>
          </View>
        </ShadowWrapper>
      </View>
    </View>
  );
};
