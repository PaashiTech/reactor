import { useState } from "react";
import { Adapt, Label, Select, Sheet, View } from "@unmaze/views";
import { ChevronDown } from "@unmaze/assets";

const relationships = [
  "Spouse/Life Partner",
  "Son",
  "Daughter",
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Grandson",
  "Granddaughter",
  "Grandfather",
  "Grandmother",
  "Other",
] as const;

type Relationships = (typeof relationships)[number];

export const SelectRelationship = () => {
  const [value, setValue] = useState<Relationships | undefined>(undefined);

  const handleSelectValue = (val: Relationships) => {
    setValue(val);
  };

  return (
    <View>
      <Label
        unstyled
        fontSize={14}
        letterSpacing={0.28}
        color={"#525252"}
        fontWeight="400"
      >
        Relationship
      </Label>
      <Select
        value={value}
        onValueChange={handleSelectValue}
        disablePreventBodyScroll
      >
        <Select.Trigger
          unstyled
          paddingHorizontal={4}
          paddingBottom={8}
          bg="transparent"
          borderBottomWidth={1}
          fontWeight={"500"}
          borderBottomColor={"#6F6F6F"}
          focusStyle={{
            borderBottomColor: "#262626",
          }}
          iconAfter={ChevronDown}
        >
          <Select.Value
            fontSize={14}
            placeholder="Select"
            color={!value ? "#ada8a8" : undefined}
          />
        </Select.Trigger>
        <Adapt when="sm" platform="touch">
          <Sheet
            native
            modal
            snapPointsMode="mixed"
            snapPoints={["50%"]}
            dismissOnSnapToBottom
            animationConfig={{
              type: "spring",
              damping: 50,
              mass: 1.5,
              stiffness: 100,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              {relationships.map((item, i) => {
                return (
                  <Select.Item index={i} key={item} value={item}>
                    <Select.ItemText fontSize={16}>{item}</Select.ItemText>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select>
    </View>
  );
};
