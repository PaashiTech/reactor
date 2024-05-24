import { ViewStyle } from "@tamagui/core";
import { SvgProps, CheckSmall } from "@unmaze/assets";
import { HeadingText, ShadowWrapper, View } from "@unmaze/views";

interface EntityCheckboxHorizontalProps extends ViewStyle {
  entity: {
    title: string;
    logo: React.FC<SvgProps>;
  };
  checked: boolean;
  handleSelectedEntities: (entityTitle: string) => void;
}

export const EntityCheckboxHorizontal: React.FC<
  EntityCheckboxHorizontalProps
> = ({ entity, checked, handleSelectedEntities }) => {
  const Logo = entity.logo;
  return (
    <ShadowWrapper flex={1} size="sm">
      <View
        flex={1}
        flexDirection="row"
        paddingHorizontal={16}
        paddingVertical={16}
        gap={12}
        alignItems="flex-start"
        borderWidth={1.5}
        borderRadius={12}
        borderColor={checked ? "#035E5D" : "transparent"}
        backgroundColor="#fff"
        position="relative"
        onPress={() => handleSelectedEntities(entity.title)}
      >
        <Logo width={20} height={20} />
        <View flex={1} flexDirection="row" alignItems="flex-start">
          <HeadingText size="md">{entity.title}</HeadingText>
        </View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 2,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#035E5D",
            backgroundColor: checked ? "#035E5D" : "transparent",
          }}
        >
          {checked && <CheckSmall width={20} />}
        </View>
      </View>
    </ShadowWrapper>
  );
};
