import { AccentText, RadioGroup, View, XStack, YStack } from "@unmaze/views";
import { RadioItem } from "@unmaze/views/src/components/core/inputs/RadioItem";
import { DurationType } from "../context/utility.types";
import { durationInputList } from "../context/data";
import { CashflowContextActions } from "../context/cashflowContext.types";

type DurationTabContentProps = {
  duration: DurationType;
  dispatch: React.Dispatch<CashflowContextActions>;
};

export const DurationTabContent: React.FC<DurationTabContentProps> = ({
  duration,
  dispatch,
}) => {
  const handleRadioSelect = (val: DurationType) => {
    dispatch({ type: "SET_DURATION", payload: { duration: val } });
  };

  return (
    <View>
      <RadioGroup
        value={duration}
        // onValueChange={(value: DurationType) => handleRadioSelect(value)}
      >
        {durationInputList.map((item) => {
          return (
            <XStack
              key={item.id}
              paddingVertical={16}
              borderBottomColor="#E7E7E7"
              borderBottomWidth={1}
              justifyContent="space-between"
              alignItems="center"
              onPress={() => {
                handleRadioSelect(item.value);
              }}
            >
              <YStack gap={4}>
                <AccentText size="sm" color="#262626">
                  {item.title}
                </AccentText>
                <AccentText size="xs" color="#6F6F6F">
                  {item.subtitle}
                </AccentText>
              </YStack>

              <RadioItem
                value={item.value}
                color={duration === item.value ? "#035E5D" : "#697077"}
              />
            </XStack>
          );
        })}
      </RadioGroup>
    </View>
  );
};
