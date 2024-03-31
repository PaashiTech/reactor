import { View, ViewProps } from "tamagui";
import { ShadowWrapper } from "../shadow/ShadowWrapper";

interface UnmzListItemCardProps extends ViewProps {}

export const UnmzListItemCard: React.FC<UnmzListItemCardProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadowWrapper size="sm">
      <View padding={12} borderRadius={12} backgroundColor="#fff" {...props}>
        {children}
      </View>
    </ShadowWrapper>
  );
};
