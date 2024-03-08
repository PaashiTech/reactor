import { RadioGroup } from "tamagui";

interface RadioItemProps {
  value: string;
  color: string;
}

export const RadioItem: React.FC<RadioItemProps> = ({ value, color }) => {
  const id = `radiogroup-${value}`;
  return (
    <RadioGroup.Item
      value={value}
      id={id}
      borderColor={color}
      borderWidth={2}
      width={18}
      height={18}
      backgroundColor="transparent"
      pressStyle={{
        borderColor: color,
        backgroundColor: "transparent",
      }}
    >
      <RadioGroup.Indicator backgroundColor={color} width={9} height={9} />
    </RadioGroup.Item>
  );
};
