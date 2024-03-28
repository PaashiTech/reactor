import { BodyText, HeadingText, View } from "@unmaze/views";

export const KeyBenefits: React.FC = () => {
  return (
    <View
      p={12}
      bg="#EBFFFF"
      gap={8}
      borderRadius={12}
      borderColor={"#9EF0F0"}
      borderWidth={1}
    >
      <HeadingText size="sm" fontWeight="700" color="#262626">
        Key benefits
      </HeadingText>
      <View paddingHorizontal={2}>
        <View flexDirection="row" gap={8}>
          <BodyText size="sm" color="#262626">{`\u25CF`}</BodyText>
          <View flex={1}>
            <BodyText size="sm" color="#262626">
              Manage all of your family member's accounts in one place
            </BodyText>
          </View>
        </View>
        <View flexDirection="row" gap={8} flexShrink={1}>
          <BodyText size="sm" color="#262626">
            {`\u25CF`}
          </BodyText>
          <View flex={1}>
            <BodyText size="sm" color="#262626">
              View your families' net worth to decide next steps in wealth
              creation and planning
            </BodyText>
          </View>
        </View>
      </View>
    </View>
  );
};
