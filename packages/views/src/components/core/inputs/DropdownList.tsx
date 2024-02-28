import { useState } from "react";
import { Pressable } from "react-native";
import { Input, Label, ScrollView, Text, View, XStack } from "tamagui";
import { ChevronDown, Close } from "@unmaze/assets";
import { Controller, ControllerProps } from "react-hook-form";
import { IconButton } from "../buttons/IconButton";
import { PopupModal } from "../modals/PopupModal";

interface DropdownListProps
  extends Pick<ControllerProps, "name" | "control" | "rules"> {
  selectItems: string[];
  label: string;
  modalTitle: string;
}

type SelectItemProps = {
  value: string;
  selected: boolean;
  onSelect: () => void;
};

export const DropdownList: React.FC<DropdownListProps> = ({
  control,
  selectItems,
  name,
  rules,
  label,
  modalTitle,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View gap={4}>
          <Label
            unstyled
            fontSize={14}
            letterSpacing={0.28}
            color={"#525252"}
            fontWeight="400"
          >
            {label}
          </Label>

          <View
            padding={4}
            paddingBottom={4}
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
                <IconButton
                  icon={ChevronDown}
                  onPress={() => setIsVisible(true)}
                />
              </View>
            </XStack>
          </View>

          {error && <Text color="#DA1E28">{error.message || "Error"}</Text>}

          <PopupModal
            isVisible={isVisible}
            onModalClose={() => setIsVisible(false)}
          >
            <View
              backgroundColor={"#fff"}
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
                  {modalTitle}
                </Text>
                <IconButton icon={Close} onPress={() => setIsVisible(false)} />
              </XStack>
              <View paddingHorizontal={12} height={294}>
                <ScrollView>
                  {selectItems.map((item, i) => (
                    <SelectItem
                      key={i}
                      value={item}
                      selected={value === item}
                      onSelect={() => {
                        onChange(item);
                        setIsVisible(false);
                      }}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
          </PopupModal>
        </View>
      )}
    />
  );
};

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  selected,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={onSelect}
      android_ripple={{
        borderless: false,
        foreground: true,
      }}
    >
      <Text
        paddingVertical={8}
        paddingHorizontal={12}
        fontWeight={"500"}
        backgroundColor={selected ? "#e6e6e6" : undefined}
        borderRadius={8}
      >
        {value}
      </Text>
    </Pressable>
  );
};
