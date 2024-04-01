import { Button, ShadowWrapper, Text, View, XStack } from "@unmaze/views";
import {
  ShadowColorType,
  ShadowSizeType,
} from "@unmaze/views/src/components/core/shadow/ShadowWrapper.types";
import { useState } from "react";
import { StatusBar } from "react-native";

export const Shadows: React.FC = () => {
  const [size, setSize] = useState<ShadowSizeType>("sm");

  const [bgColor, setColor] = useState<string>("#FFF");

  return (
    <View flex={1} alignItems="center" bg={bgColor}>
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
          <Button
            onPress={() => {
              if (bgColor === "#FFF") {
                setColor("#FAF9F2");
              } else {
                setColor("#FFF");
              }
            }}
          >
            Change BG
          </Button>
        </XStack>
      </View>
      <View marginTop={50} width={256} height={180}>
        <ShadowWrapper
          size={size}
          shadowColor={
            bgColor === "#FFF"
              ? ShadowColorType.onPrimary
              : ShadowColorType.onSecondary
          }
        >
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
