import DropShadow from "react-native-drop-shadow";
import { ViewProps } from "react-native";
import { ShadowSizeType, ShadowStyleType } from "./ShadowWrapper.types";
import { shadowVariants } from "./shadowVariants";

interface ShadowWrapperProps extends ViewProps {
  size: ShadowSizeType;
}

export const ShadowWrapper: React.FC<ShadowWrapperProps> = ({
  children,
  size,
  ...props
}) => {
  const shadowStyle: ShadowStyleType = {
    shadowColor: "#222222",
    ...shadowVariants[size],
  };

  return (
    <DropShadow style={shadowStyle} {...props}>
      {children}
    </DropShadow>
  );
};
