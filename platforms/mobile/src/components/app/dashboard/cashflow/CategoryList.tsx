import {
  AccentText,
  BodyText,
  HeadingText,
  SVGWrapper,
  ShadowWrapper,
  View,
  XStack,
  formatNetWorth,
} from "@unmaze/views";
import { PlaceholderIcon, ChevronRight, SvgProps } from "@unmaze/assets";

type Category = "Incoming" | "Spends" | "Investing" | "Savings";

type CategoryListItem = {
  id: number;
  category: Category;
  icon: React.FC<SvgProps>;
  amount: number;
};

type CategoryList = CategoryListItem[];

const categoryList: CategoryList = [
  {
    id: 1,
    category: "Incoming",
    icon: PlaceholderIcon,
    amount: 45650,
  },
  {
    id: 2,
    category: "Spends",
    icon: PlaceholderIcon,
    amount: 37140,
  },
  {
    id: 3,
    category: "Investing",
    icon: PlaceholderIcon,
    amount: 5500,
  },
  {
    id: 4,
    category: "Savings",
    icon: PlaceholderIcon,
    amount: 3010,
  },
];

export const CategoryList = () => {
  return (
    <ShadowWrapper size="sm">
      <View mt={20} bg="#FFF" borderRadius={16} paddingVertical={4}>
        {categoryList.map((item) => (
          <CategoryListItem
            key={item.id}
            amount={item.amount}
            category={item.category}
            icon={item.icon}
          />
        ))}
      </View>
    </ShadowWrapper>
  );
};

type CategoryListItemProps = Omit<CategoryListItem, "id">;

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  category,
  icon,
  amount,
}) => {
  const formattedAmount = formatNetWorth(amount);

  return (
    <XStack
      jc="space-between"
      p={16}
      pr={12}
      borderBottomWidth={category === "Savings" ? 0 : 1}
      borderBottomColor="#E7E7E7"
    >
      <XStack gap={12} ai="center">
        <SVGWrapper iconSVG={icon} size="md" />
        <AccentText>{category}</AccentText>
      </XStack>
      <XStack ai="center">
        <HeadingText color={category === "Incoming" ? "#198038" : "#262626"}>
          {category === "Incoming" ? "+ " : ""}
          {formattedAmount}
        </HeadingText>
        <SVGWrapper iconSVG={ChevronRight} size="sm" />
      </XStack>
    </XStack>
  );
};
