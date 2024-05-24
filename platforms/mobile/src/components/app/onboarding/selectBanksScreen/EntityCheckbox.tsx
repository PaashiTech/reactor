import { ViewStyle } from "@tamagui/core";
import { SvgProps, CheckSmall } from "@unmaze/assets";
import { AccentText, ShadowWrapper, View } from "@unmaze/views";

interface EntityCheckboxProps extends ViewStyle {
  entity: {
    id: number;
    title: string;
    logo: React.FC<SvgProps>;
  };
  checked: boolean;
  handleSelectedBanks: (entityTitle: string) => void;
}

export const EntityCheckbox: React.FC<EntityCheckboxProps> = ({
  entity,
  checked,
  handleSelectedBanks,
}) => {
  const Logo = entity.logo;
  return (
    <View flexBasis="30%">
      <ShadowWrapper flex={1} size="sm" key={entity.id}>
        <View
          flex={1}
          paddingHorizontal={8}
          paddingVertical={16}
          gap={12}
          alignItems="center"
          borderWidth={1}
          borderRadius={12}
          borderColor={checked ? "#035E5D" : "transparent"}
          backgroundColor="#fff"
          position="relative"
          onPress={() => handleSelectedBanks(entity.title)}
        >
          <View position="absolute" top={8} right={8}>
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 2,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "transparent",
                backgroundColor: checked ? "#035E5D" : "transparent",
              }}
            >
              {checked && <CheckSmall width={20} />}
            </View>
          </View>
          <Logo width={28} height={28} />
          <AccentText size="sm" textAlign="center">
            {entity.title}
          </AccentText>
        </View>
      </ShadowWrapper>
    </View>
  );
};
