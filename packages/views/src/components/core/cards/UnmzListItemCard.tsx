import { View, ViewProps } from "tamagui";

interface UnmzListItemCardProps extends ViewProps {}

export const UnmzListItemCard: React.FC<UnmzListItemCardProps> = ({
  children,
  ...props
}) => {
  return (
    <View
      padding={12}
      borderRadius={12}
      backgroundColor="#fff"
      elevationAndroid={2}
      {...props}
    >
      {children}
    </View>
  );
};
