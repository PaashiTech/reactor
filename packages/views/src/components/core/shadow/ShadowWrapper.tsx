import DropShadow from "react-native-drop-shadow";
import { ViewProps } from "react-native";
import {
  ShadowColorType,
  ShadowSizeType,
  ShadowStyleType,
} from "./ShadowWrapper.types";
import { shadowVariants } from "./shadowVariants";

interface ShadowWrapperProps extends ViewProps {
  size: ShadowSizeType;
  shadowColor?: ShadowColorType;
}

export const ShadowWrapper: React.FC<ShadowWrapperProps> = ({
  children,
  size,
  shadowColor = ShadowColorType.onSecondary,
  ...props
}) => {
  const shadowStyle: ShadowStyleType = {
    shadowColor: shadowColor,
    ...shadowVariants[size],
  };

  return (
    <DropShadow style={shadowStyle} {...props}>
      {children}
    </DropShadow>
  );
};
