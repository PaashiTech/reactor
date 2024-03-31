import { AccentText, RadioGroup, View, XStack, YStack } from "@unmaze/views";
import { RadioItem } from "@unmaze/views/src/components/core/inputs/RadioItem";
import { DurationType } from "../context/types";
import { useCashflowContext } from "../context/CashflowContextProvider";

type DurationListType = {
  id: number;
  title: string;
  subtitle: string;
  value: DurationType;
}[];

export const DurationTabContent = () => {
  const {
    state: {
      appliedFilters: { duration },
    },
    dispatch,
  } = useCashflowContext();

  const handleRadioSelect = (val: DurationType) => {
    dispatch({ type: "SET_DURATION", payload: { duration: val } });
  };

  const durationInputList: DurationListType = [
    {
      id: 1,
      title: "Last 30 days",
      subtitle: "24 Dec 24' - Today",
      value: "LAST_30_DAYS",
    },
    {
      id: 2,
      title: "Montly",
      subtitle: "1 Jan 24' - 31 Jan 24'",
      value: "MONTHLY",
    },
  ];

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
