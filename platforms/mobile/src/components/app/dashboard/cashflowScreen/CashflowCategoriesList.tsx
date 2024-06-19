import { PlaceholderIcon } from "@unmaze/assets";
import {
  View,
  YStack,
  XStack,
  SVGWrapper,
  AccentText,
  HeadingText,
} from "@unmaze/views";

type CashflowCategoriesListProps = {};

export const CashflowCategoriesList: React.FC<
  CashflowCategoriesListProps
> = ({}) => {
  return (
    <View paddingHorizontal="$5" mt="$5" paddingBottom="$5">
      <YStack gap="$4">
        <CashflowCategoryListItem
          amount={150000}
          category="Salary"
          percentShare={75}
          progressBarColor="#FFF2E8"
        />
        <CashflowCategoryListItem
          amount={150000}
          category="Interest"
          percentShare={25}
          progressBarColor="#DEFBE6"
        />
        <CashflowCategoryListItem
          amount={150000}
          category="Credit"
          percentShare={3}
          progressBarColor="#F6F2FF"
        />
        <CashflowCategoryListItem
          amount={150000}
          category="Transfers"
          percentShare={1}
          progressBarColor="#F6F2FF"
        />
        <CashflowCategoryListItem
          amount={150000}
          category="Refunds"
          percentShare={0.2}
          progressBarColor="#F6F2FF"
        />
      </YStack>
    </View>
  );
};

type CashflowCategoryListItemProps = {
  category: string;
  amount: number;
  percentShare: number;
  progressBarColor: string;
};

const CashflowCategoryListItem: React.FC<CashflowCategoryListItemProps> = ({
  amount,
  category,
  percentShare,
  progressBarColor,
}) => {
  const indianNumberFormat = new Intl.NumberFormat("en-IN");

  return (
    <View
      bg="#FFF"
      paddingHorizontal="$3"
      paddingVertical="$4"
      borderWidth={1}
      borderColor="$stroke/on-primary/stroke_disabled"
      borderRadius="$3"
    >
      <YStack gap="$3">
        <XStack justifyContent="space-between">
          <XStack gap="$2">
            <SVGWrapper
              iconSVG={PlaceholderIcon}
              size="md"
              svgColor="#697077"
            />
            <AccentText size="lg">{category}</AccentText>
          </XStack>
          <HeadingText>₹{indianNumberFormat.format(amount)}</HeadingText>
        </XStack>
        <View height={21}>
          <View
            height={21}
            borderRadius={9999}
            width={`${Math.max(percentShare, 15)}%`}
            bg={progressBarColor}
            alignItems="flex-end"
            justifyContent="center"
            paddingRight="$2"
          >
            <AccentText>
              {percentShare < 1 ? `<1%` : `${percentShare}%`}
            </AccentText>
          </View>
        </View>
      </YStack>
    </View>
  );
};
