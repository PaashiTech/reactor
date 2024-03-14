import { Text, View, XStack, YStack } from "tamagui";

export const FamilyMemberCard: React.FC = () => {
  return (
    <View
      paddingVertical={20}
      paddingHorizontal={16}
      gap={12}
      borderRadius={16}
      borderWidth={1}
      borderColor="#E7E7E7"
      backgroundColor="#FFFFFF"
    >
      {/* Main content */}
      <XStack justifyContent="space-between">
        {/* Family member details */}
        <YStack gap={4}>
          <XStack gap={6}>
            {/* Name */}
            <Text
              color="#262626"
              fontSize={14}
              fontStyle="normal"
              fontWeight="500"
              lineHeight={18}
              letterSpacing={0.28}
            >
              Pankaj Purushottam Sarda
            </Text>

            {/* Status */}
            <Text
              color="#262626"
              fontSize={14}
              fontStyle="normal"
              fontWeight="500"
              lineHeight={18}
              letterSpacing={0.28}
            >
              (Invited)
            </Text>
          </XStack>

          {/* Phone number */}
          <Text
            color="#6F6F6F"
            fontSize={12}
            fontStyle="normal"
            fontWeight="500"
            lineHeight={16}
            letterSpacing={0.24}
          >
            8945612311
          </Text>
        </YStack>

        {/* 3-dot menu */}
        <YStack>
          {/* TODO: Icon button */}
          <View height={20} width={20} backgroundColor="red"></View>
        </YStack>
      </XStack>

      {/* Remind me link */}
      <XStack gap={4}>
        <Text
          color="#009D9A"
          fontSize={12}
          fontStyle="normal"
          fontWeight="700"
          lineHeight={16}
          letterSpacing={0.24}
        >
          Remind
        </Text>
        <View height={16} width={16} backgroundColor="red"></View>
      </XStack>
    </View>
  );
};
