import { FC } from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { FamilyMember } from "../../../stores/models/user";
import { computeUserFullName } from "../../../stores/helpers/user";

export type FamilyMemberCardProps = FamilyMember & { optionsCb: () => void };

export const FamilyMemberCard: FC<FamilyMemberCardProps> = ({
  name,
  invitation,
  phone,
  optionsCb,
}) => {
  const shouldBeReminded = (inviteSentAt: string) => {
    const todayDate = new Date();
    const inviteSentAtDate = new Date(inviteSentAt);
    return (
      Math.floor(
        (todayDate.getTime() - inviteSentAtDate.getTime()) / (24 * 3600 * 1000)
      ) > 0
    );
  };

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
              {computeUserFullName(name)}
            </Text>

            {/* Status */}
            {invitation.status === "Invited" && (
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
            )}
            {invitation.status === "Done" && (
              <View
                height={20}
                width={20}
                backgroundColor="green"
                onPress={optionsCb}
              ></View>
            )}
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
            {phone}
          </Text>
        </YStack>

        {/* 3-dot menu */}
        <YStack>
          {/* TODO: Icon button */}
          <View
            height={20}
            width={20}
            backgroundColor="red"
            onPress={optionsCb}
          ></View>
        </YStack>
      </XStack>

      {/* Remind me link */}
      {shouldBeReminded(invitation.created_at) && (
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
      )}
    </View>
  );
};
