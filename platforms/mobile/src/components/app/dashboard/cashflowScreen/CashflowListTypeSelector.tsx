import { View, Text, HeadingText } from "@unmaze/views";
import React, { useState } from "react";
import { CashflowListType } from "./context/utility.types";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { LayoutChangeEvent } from "react-native";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";

type CashflowListTypeSelectorProps = {};

export const CashflowListTypeSelector: React.FC<
  CashflowListTypeSelectorProps
> = ({}) => {
  const {
    state: { selectedListType },
    dispatch,
  } = useCashflowScreenContext();

  const [btnContainerWidth, setWidth] = useState(0);
  const [btnContainerHeight, setHeight] = useState(0);
  const btnWidth = btnContainerWidth / 2;
  const btnHeight = btnContainerHeight - 2;

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
  };

  const handleListTypeSelect = (cashflowListType: CashflowListType) => {
    dispatch({
      type: "SELECT_CASHFLOW_LIST_TYPE",
      payload: { cashflowListType: cashflowListType },
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            selectedListType === "Categories" ? 0 : btnWidth - 2,
            {
              duration: 200,
            }
          ),
        },
      ],
    };
  });

  return (
    <View
      bg="#FFF"
      mt="$6"
      marginHorizontal="$5"
      flexDirection="row"
      paddingVertical="$3"
      borderRadius="$2"
      borderWidth={1}
      borderColor="$stroke/on-secondary/stroke_disabled"
      onLayout={onLayout}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "#393939",
            width: btnWidth,
            height: btnHeight,
            borderRadius: 7,
          },
          animatedStyle,
        ]}
      />
      <View
        flexGrow={1}
        alignItems="center"
        hitSlop={{ top: 12, bottom: 12 }}
        onPress={() => handleListTypeSelect("Categories")}
      >
        <HeadingText
          color={
            selectedListType === "Categories"
              ? "#FFF"
              : "$text/on-primary/text_subdued"
          }
        >
          Categories
        </HeadingText>
      </View>
      <View
        flexGrow={1}
        alignItems="center"
        hitSlop={{ top: 12, bottom: 12 }}
        onPress={() => handleListTypeSelect("Transactions")}
      >
        <HeadingText
          color={
            selectedListType === "Transactions"
              ? "#FFF"
              : "$text/on-primary/text_subdued"
          }
        >
          Transactions
        </HeadingText>
      </View>
    </View>
  );
};
