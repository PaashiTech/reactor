/**
 * @name FamilyMemberCard
 *
 * @description
 * A component to a card for each family member that exists in User's family
 */

import { FC } from "react";
import { View, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";

import { computeUserFullName } from "../../../stores/helpers/user";
import { SVGWrapper } from "../../shared/SVGWrapper";
import { Check2, ChevronRight, MoreVert } from "@unmaze/assets";

import { FamilyMemberWithCb } from "./FamilyMemberList";
import { AccentText } from "../../core/typography/AccentText";
import { IconButton } from "../../core/buttons/IconButton";

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
      <XStack justifyContent="space-between" alignItems="center">
        {/* Family member details */}
        <YStack gap={4}>
          <XStack alignItems="center" gap={6}>
            {/* Name */}
            <AccentText color="#262626">{fullName}</AccentText>

            {/* Status */}
            {invitation.status === "Invited" && (
              <AccentText color="#262626">(Invited)</AccentText>
            )}
            {invitation.status === "Accepted" && (
              // <View height={20} width={20} backgroundColor="green"></View>
              <SVGWrapper iconSVG={Check2} size="sm" />
            )}
          </XStack>

          {/* Phone number */}
          <AccentText size="sm" color="#6F6F6F">
            {phone}
          </AccentText>
        </YStack>

        {/* 3-dot menu */}

        <IconButton icon={MoreVert} />
      </XStack>

      {/* Remind me link */}
      {invitation.status !== "Accepted" &&
        shouldBeReminded(invitation.created_at) && (
          <XStack gap={4} onPress={onRemind}>
            <AccentText fontWeight="700" size="sm" color="#009D9A">
              Remind
            </AccentText>

            <SVGWrapper svgColor="#009D9A" iconSVG={ChevronRight} size="sm" />
          </XStack>
        )}
    </View>
  );
};
