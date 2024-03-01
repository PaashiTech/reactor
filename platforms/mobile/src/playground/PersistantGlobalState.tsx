import {
  View,
  Text,
  UnmzGradientButton,
  useTestStore,
  Input,
} from "@unmaze/views";
import { useState } from "react";

export const PersistantGlobalState = () => {
  const testNumber = useTestStore((state) => state.testNumber);
  const increaseBy = useTestStore((state) => state.increase);
  const decreaseBy = useTestStore((state) => state.decrease);

  const [incrementN, setIncrementN] = useState(1);
  const [decrementN, setDecrementN] = useState(1);

  return (
    <View flex={1} alignItems="center">
      <View flex={1} justifyContent="center">
        <Text alignSelf="center">{testNumber}</Text>
      </View>
      <View flex={1} flexDirection="row">
        <Input
          value={incrementN.toString()}
          onChangeText={(t) => {
            t === undefined
              ? setIncrementN(0)
              : setIncrementN(incrementN + parseInt(t));
          }}
          keyboardType="numeric"
          maxLength={2}
        />
        <UnmzGradientButton onPress={() => increaseBy(incrementN)}>
          Increase count
        </UnmzGradientButton>
      </View>
      <View flex={1} flexDirection="row">
        <Input
          value={decrementN.toString()}
          onChangeText={(t) => {
            t === undefined
              ? setIncrementN(0)
              : setDecrementN(decrementN + parseInt(t));
          }}
          keyboardType="numeric"
          maxLength={2}
        />
        <UnmzGradientButton onPress={() => decreaseBy(decrementN)}>
          Decrease count
        </UnmzGradientButton>
      </View>
    </View>
  );
};
