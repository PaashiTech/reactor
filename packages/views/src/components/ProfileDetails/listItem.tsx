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
    <ListItemFrame
      ref={ref}
      {...props}
      flexDirection="column"
      alignItems="flex-start"
    >
      <ListItemSubtitle>{props.subTitle}</ListItemSubtitle>
      <View flexDirection="row">
        <ListItemTitle>{props.title}</ListItemTitle>
        {themedIconAfter ? (
          <>
            <Spacer size={spaceSize} />
            {themedIconAfter}
          </>
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
