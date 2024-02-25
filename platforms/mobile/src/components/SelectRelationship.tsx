import { useState } from "react";
import {
  Input,
  Label,
  PopupModal,
  ScrollView,
  Text,
  View,
  XStack,
} from "@unmaze/views";
import { ChevronDown, Close } from "@unmaze/assets";
import { Pressable } from "react-native";
import { IconButton } from "./IconButton";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<Relationships | undefined>(undefined);

  return (
    <View gap={4}>
      <Label
        unstyled
        fontSize={14}
        letterSpacing={0.28}
        color={"#525252"}
        fontWeight="400"
      >
        Relationship
      </Label>

      <View
        p={4}
        pb={4}
        borderBottomWidth={1}
        borderColor="#6F6F6F"
        pressStyle={{ borderColor: "#262626" }}
        onPress={() => setIsVisible(true)}
      >
        <XStack alignItems="center">
          <Input
            padding={0}
            unstyled
            placeholder="Select"
            flex={1}
            editable={false}
            value={value}
            color="#161616"
          />
          <View>
            <IconButton icon={ChevronDown} onPress={() => setIsVisible(true)} />
          </View>
        </XStack>
      </View>

      <PopupModal
        isVisible={isVisible}
        onModalClose={() => setIsVisible(false)}
      >
        <View
          bg={"#fff"}
          width={320}
          borderRadius={16}
          paddingVertical={16}
          gap={12}
        >
          <XStack paddingHorizontal={16}>
            <Text
              flex={1}
              fontSize={16}
              fontWeight={"600"}
              letterSpacing={0.32}
            >
              Select relation
            </Text>
            <IconButton icon={Close} onPress={() => setIsVisible(false)} />
          </XStack>
          <View paddingHorizontal={12} height={294}>
            <ScrollView>
              {relationships.map((item, i) => (
                <RelationListItem
                  key={i}
                  value={item}
                  selected={value === item}
                  onSelect={() => {
                    setValue(item);
                    setIsVisible(false);
                  }}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </PopupModal>
    </View>
  );
};

const RelationListItem = ({
  value,
  selected,
  onSelect,
}: {
  value: string;
  selected: boolean;
  onSelect: () => void;
}) => {
  return (
    <Pressable onPress={onSelect}>
      <Text
        paddingVertical={8}
        paddingHorizontal={12}
        fontWeight={"500"}
        bg={selected ? "#e6e6e6" : undefined}
        borderRadius={8}
      >
        {value}
      </Text>
    </Pressable>
  );
};
