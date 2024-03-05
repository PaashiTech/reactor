import { useState } from "react";
import { UnmzNavScreen } from "../types";
import { APP_THEME_SCREEN_ID, AppThemeScreenProps } from "./types";
import { View, Label, RadioGroup, XStack } from "@unmaze/views";

type ThemeType = "system" | "light" | "dark";

type ThemeOptionsType = {
  id: number;
  title: string;
  value: ThemeType;
};

const themeOptions: ThemeOptionsType[] = [
  {
    id: 1,
    title: "System Default",
    value: "system",
  },
  {
    id: 2,
    title: "Light",
    value: "light",
  },
  {
    id: 3,
    title: "Dark",
    value: "dark",
  },
];

const _AppThemeScreen: React.FC<AppThemeScreenProps> = ({
  navigation,
  route,
}) => {
  /**
   * The selected value can be handled via global state
   *
   * When implemented, remove the local state variable and
   * hook it to that global state with its setter action
   */

  const [selected, setSelected] = useState<ThemeType>("system");

  const handleRadioSelect = (val: ThemeType) => {
    setSelected(val);
  };

  return (
    <View flex={1}>
      <View paddingHorizontal={20} mt={24}>
        <RadioGroup defaultValue={selected} onValueChange={handleRadioSelect}>
          <View gap={20}>
            {themeOptions.map((option) => (
              <RadioGroupItemWithLabel
                key={option.id}
                value={option.value}
                label={option.title}
                color={option.value === selected ? "#035E5D" : "#697077"}
              />
            ))}
          </View>
        </RadioGroup>
      </View>
    </View>
  );
};

export const AppThemeScreen: UnmzNavScreen = {
  key: APP_THEME_SCREEN_ID,
  title: "App Theme",
  content: _AppThemeScreen,
};

const RadioGroupItemWithLabel = (props: {
  value: string;
  label: string;
  color: string;
}) => {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack alignItems="center" gap={8}>
      <RadioGroup.Item
        value={props.value}
        id={id}
        borderColor={props.color}
        borderWidth={2}
        backgroundColor="transparent"
        pressStyle={{
          borderColor: props.color,
          backgroundColor: "transparent",
        }}
      >
        <RadioGroup.Indicator
          backgroundColor={props.color}
          width={12}
          height={12}
        />
      </RadioGroup.Item>

      <Label
        unstyled
        htmlFor={id}
        fontWeight={"500"}
        letterSpacing={0.28}
        color="#161616"
      >
        {props.label}
      </Label>
    </XStack>
  );
};
