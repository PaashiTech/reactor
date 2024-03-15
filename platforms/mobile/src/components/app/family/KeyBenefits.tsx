import { Text, View } from "@unmaze/views";

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
      <Text fontSize={16} fontWeight={"700"} letterSpacing={0.32}>
        Key benefits
      </Text>
      <View paddingHorizontal={2}>
        <View flexDirection="row" gap={8}>
          <Text fontSize={12}>{`\u25CF`}</Text>
          <View flex={1}>
            <Text fontSize={12} letterSpacing={0.24}>
              Manage all of your family member's accounts in one place
            </Text>
          </View>
        </View>
        <View flexDirection="row" gap={8} flexShrink={1}>
          <Text fontSize={12}>{`\u25CF`}</Text>
          <View flex={1}>
            <Text fontSize={12} letterSpacing={0.24}>
              View your families' net worth to decide next steps in wealth
              creation and planning
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
