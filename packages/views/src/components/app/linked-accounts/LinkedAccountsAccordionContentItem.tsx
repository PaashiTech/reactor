import { Text, View, XStack, YStack } from "tamagui";
import { ChevronRight, PlaceholderIcon } from "@unmaze/assets";
import {
  getFormattedAccountNumber,
  getFormattedAmount,
  getFormattedLinkedDateAndTime,
} from "../../../helpers/linkedAccountHelpers";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { UnmzListItemCard } from "../../core/cards/UnmzListItemCard";
import { Checkbox } from "../../core/inputs/Checkbox";
import { RadioItem } from "../../core/inputs/RadioItem";
import {
  AccountType,
  InfoType,
  LinkType,
  CheckboxType,
  RadioType,
} from "./LinkedAccountsAccordionContentItem.types";
import { AccentText } from "../../core/typography/AccentText";

type LinkedAccountsAccordionContentItemProps = AccountType &
  (InfoType | LinkType | CheckboxType | RadioType);

export const LinkedAccountsAccordionContentItem: React.FC<
  LinkedAccountsAccordionContentItemProps
> = ({ account, ...props }) => {
  const RightComponent = () => {
    switch (props.type) {
      case "info":
        return <AcountInfo account={account} />;

      case "link":
        return <LinkNow />;

      case "checkbox":
        return <Checkbox checked={props.checked} />;

      case "radio":
        return (
          <RadioItem
            value={props.value}
            color={props.value === props.selected ? "#035E5D" : "#697077"}
          />
        );

      default:
        return null;
    }
  };

  const getBorderColor = () => {
    switch (props.type) {
      case "checkbox":
        return props.checked ? "#035E5D" : "transparent";

      case "radio":
        return props.selected === props.value ? "#035E5D" : "transparent";

      default:
        return "transparent";
    }
  };

  return (
    <UnmzListItemCard
      borderWidth={2}
      borderColor={getBorderColor()}
      pressStyle={{
        borderColor: props.type === "link" ? "#009D9A" : undefined,
      }}
    >
      <XStack alignItems="center" gap={12}>
        <PlaceholderIcon />
        <YStack flex={1} gap={2}>
          <AccentText color="#262626">{account.type}</AccentText>
          <AccentText size="sm" color="#6F6F6F">
            {getFormattedAccountNumber(account.accountNumber)}
          </AccentText>
        </YStack>
        <RightComponent />
      </XStack>
    </UnmzListItemCard>
  );
};

const AcountInfo: React.FC<{ account: any }> = ({ account }) => {
  return (
    <YStack gap={2}>
      <AccentText size="sm" alignSelf="flex-end" color="#262626">
        {getFormattedAmount(account.amount)}
      </AccentText>
      <AccentText size="sm" color="#6F6F6F">
        {getFormattedLinkedDateAndTime(account.linkedDateAndTime)}
      </AccentText>
    </YStack>
  );
};

const LinkNow: React.FC = () => {
  return (
    <XStack alignItems="center" gap={2}>
      <Text fontSize={12} fontWeight={"600"} color="#08BDBA" alignSelf="center">
        Link Now
      </Text>
      <View marginTop={2}>
        <SVGWrapper iconSVG={ChevronRight} size="sm" svgColor="#08BDBA" />
      </View>
    </XStack>
  );
};
