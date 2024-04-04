import { View, ViewProps } from "tamagui";
import { ShadowWrapper } from "../shadow/ShadowWrapper";

interface UnmzCardProps extends ViewProps {}

export const UnmzCard: React.FC<UnmzCardProps> = ({ children, ...props }) => {
  return (
    <ShadowWrapper size="sm">
      <View borderRadius={12} backgroundColor="#fff" {...props}>
        {children}
      </View>
    </ShadowWrapper>
  );
};
