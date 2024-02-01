/**
 * @name TestComponent
 *
 * @description
 * Simple text component that renders a string for testing purposes
 */

import { FC } from "react";
import { View, Text } from "tamagui";

type TestComponentProps = {
  message: string;
};

export const TestComponent: FC<TestComponentProps> = ({ message }) => {
  return (
    <View
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontFamily={"$body"}>{message}</Text>
    </View>
  );
};
