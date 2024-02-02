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
  getVariableValue,
  getTokens,
  Spacer,
} from "tamagui";
import {
  ListItemFramStyles,
  ListItemSubtitleStyles,
  ListItemTitleStyles,
} from "./styles";

const _ListItemFrame = ListItemFrame.styleable<ListItemProps>((props, ref) => {
  const _props = useProps(props);

  const {
    children,
    iconAfter,
    space,
    scaleIcon = 1,
    scaleSpace = 1,
    unstyled = false,
    color,
    ...rest
  } = _props;

  const size = props.size || "$true";
  const iconSize = getFontSize(size as any) * scaleIcon;
  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any,
  });

  const themedIconAfter = getThemedIcon(iconAfter);
  const spaceSize =
    getVariableValue(getTokens().space[props.space as any] ?? iconSize) *
    scaleSpace;

  return (
    <ListItemFrame ref={ref} {...props} {...ListItemFramStyles}>
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
            {themedIconAfter}
          </View>
        ) : null}
      </View>
    </ListItemFrame>
  );
});

const _ListItem = withStaticProperties(_ListItemFrame, {
  Subtitle: ListItemSubtitle,
  Text: ListItemText,
});

export { _ListItem };
