/**
 * @name FamilyMemberCard
 *
 * @description
 * A component to a card for each family member that exists in User's family
 */

import { FC } from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";

import { computeUserFullName } from "../../../stores/helpers/user";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { Check2, ChevronRight, MoreVert } from "@unmaze/assets";

import { FamilyMemberWithCb } from "./FamilyMemberList";

type FamilyMemberCardProps = FamilyMemberWithCb;

export const FamilyMemberCard: FC<FamilyMemberCardProps> = ({
  name,
  invitation,
  phone,
  onOptions,
  onRemind,
}) => {
  const fullName = computeUserFullName(name);

  const shouldBeReminded = (inviteSentAt: string) => {
    const todayDate = new Date();
    const inviteSentAtDate = new Date(inviteSentAt);
    const DURATION_IN_MS = 24 * 3600 * 1000; // 24 Hrs
    return (
      Math.floor(
        (todayDate.getTime() - inviteSentAtDate.getTime()) / DURATION_IN_MS
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
          <XStack alignItems="center" gap={6}>
            {/* Name */}
            <Text
              color="#262626"
              fontSize={14}
              fontStyle="normal"
              fontWeight="500"
              lineHeight={18}
              letterSpacing={0.28}
            >
              {fullName}
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
            {invitation.status === "Accepted" && (
              // <View height={20} width={20} backgroundColor="green"></View>
              <SVGWrapper iconSVG={Check2} size="sm" />
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
          <Pressable
            android_ripple={{
              color: "#d1d1d1",
              borderless: true,
              radius: 16,
            }}
            onPress={onOptions}
          >
            <SVGWrapper iconSVG={MoreVert} size="md" />
          </Pressable>
        </YStack>
      </XStack>

      {/* Remind me link */}
      {shouldBeReminded(invitation.created_at) && (
        <XStack gap={4} onPress={onRemind}>
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

          <SVGWrapper svgColor="#009D9A" iconSVG={ChevronRight} size="sm" />
        </XStack>
      )}
    </View>
  );
};
