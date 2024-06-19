import {
  View,
  YStack,
  XStack,
  SVGWrapper,
  AccentText,
  HeadingText,
  BodyText,
} from "@unmaze/views";
import { CanaraBankLogo } from "@unmaze/assets";
import { SectionList } from "react-native";
import { transactionsList } from "./contants";
import { convertToSectionListFormat, formatTime } from "./helpers";

const sectionedTransactions = convertToSectionListFormat(
  transactionsList.reverse()
);

type CashflowTransactionsListProps = {};

export const CashflowTransactionsList: React.FC<
  CashflowTransactionsListProps
> = ({}) => {
  return (
    <View paddingHorizontal="$5" paddingBottom="$5">
      <SectionList
        scrollEnabled={false}
        sections={sectionedTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CashflowTransactionsListItem key={item.id} {...item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View mb="$3" mt="$4" pl="$1">
            <AccentText size="sm">{title}</AccentText>
          </View>
        )}
      />
    </View>
  );
};

type CashflowTransactionsListItemProps = {
  amount: number;
  title: string;
  category: string;
  timeStamp: string;
};

const CashflowTransactionsListItem: React.FC<
  CashflowTransactionsListItemProps
> = ({ amount, title, category, timeStamp }) => {
  const indianNumberFormat = new Intl.NumberFormat("en-IN");

  return (
    <View
      bg="#FFF"
      paddingHorizontal="$3"
      mt="$2"
      paddingVertical="$3"
      borderWidth={1}
      borderColor="$stroke/on-primary/stroke_disabled"
      borderRadius="$3"
    >
      <YStack gap="$3">
        <XStack justifyContent="space-between">
          <XStack width="100%" gap="$2">
            <YStack justifyContent="space-between">
              <AccentText size="lg" color="$text/on-primary/text_subdued">
                {title}
              </AccentText>
              <HeadingText>₹{indianNumberFormat.format(amount)}</HeadingText>
            </YStack>
            <YStack marginLeft="auto" gap="$2">
              <View
                paddingHorizontal={14}
                paddingVertical={6}
                backgroundColor="$gray/10"
                borderColor="$stroke/on-primary/stroke_disabled"
                borderWidth={1}
                borderRadius="$2"
                alignItems="center"
              >
                <AccentText>{category}</AccentText>
              </View>

              {/* The logo below shall be parameterized when the data model is finalized */}

              <XStack gap="$1" alignSelf="flex-end">
                <SVGWrapper iconSVG={CanaraBankLogo} size="sm" />
                <BodyText size="sm">•</BodyText>
                <BodyText size="sm">{formatTime(timeStamp)}</BodyText>
              </XStack>
            </YStack>
          </XStack>
        </XStack>
      </YStack>
    </View>
  );
};
