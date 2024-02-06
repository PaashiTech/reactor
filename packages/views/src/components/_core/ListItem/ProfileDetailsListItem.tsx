/**
 * @name ProfileDetailsListItem
 *
 * @description
 * Component to render a single item in the profile details section
 */

import {
  ListItemFrame,
  ListItemTitle,
  ListItemSubtitle,
  withStaticProperties,
  ListItemText,
  ListItemProps,
  View,
  useProps,
  getFontSize,
  useGetThemedIcon,
} from "tamagui";
import {
  ListItemFrameStyles,
  ListItemSubtitleStyles,
  ListItemTitleStyles,
} from "./ProfileDetailsListItem.styles";

const _ListItemFrame = ListItemFrame.styleable<
  ListItemProps & { onIconPress?: () => void }
>((props, ref) => {
  const _props = useProps(props);

  const {
    children,
    iconAfter,
    space,
    scaleIcon = 1,
    scaleSpace = 1,
    unstyled = false,
    color,
    onIconPress,
    ...rest
  } = _props;

  const size = props.size || "$true";
  const iconSize = getFontSize(size as any) * scaleIcon;
  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any,
  });

  const themedIconAfter = getThemedIcon(iconAfter);

  return (
    <ListItemFrame ref={ref} {...props} {...ListItemFrameStyles}>
      <ListItemSubtitle {...ListItemSubtitleStyles}>
        {props.subTitle}
      </ListItemSubtitle>
      <View flexDirection="row">
        <ListItemTitle {...ListItemTitleStyles}>{props.title}</ListItemTitle>
        {themedIconAfter ? (
          <View
            flex={1}
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={10}
          >
            <View onPress={onIconPress}>{themedIconAfter}</View>
          </View>
        ) : null}
      </View>
    </ListItemFrame>
  );
});

const ProfileDetailsListItem = withStaticProperties(_ListItemFrame, {
  Subtitle: ListItemSubtitle,
  Text: ListItemText,
});

export { ProfileDetailsListItem };
