import { SaafeLogo } from "@unmaze/assets";
import { BodyText, ShadowWrapper, View, XStack } from "@unmaze/views";

export const FooterWithShadow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ShadowWrapper size="sm">
      <View paddingHorizontal={20} paddingVertical={16} gap={12} bg="#fff">
        {children}
      </View>
    </ShadowWrapper>
  );
};

export const SaafeFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <FooterWithShadow>
      {children}
      <XStack gap={8} alignSelf="center">
        <BodyText size="sm" color="#6F6F6F">
          Powered by RBI's Account Aggregator
        </BodyText>
        <SaafeLogo />
      </XStack>
    </FooterWithShadow>
  );
};
