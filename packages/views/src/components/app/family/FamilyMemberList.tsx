import { FC, PropsWithChildren, useEffect } from "react";
import { YStack } from "tamagui";
import { FamilyMember } from "../../../stores/models/user";
import { FamilyMemberCard } from "./FamilyMemberCard";

export type FamilyMemberWithCb = FamilyMember & {
  onOptions: () => void;
  onRemind: () => void;
};

type FamilyMemberListProps = {
  members: FamilyMemberWithCb[];
};

export const FamilyMemberList: FC<FamilyMemberListProps> = ({ members }) => {
  return (
    <YStack flex={1} rowGap={16} justifyContent="center">
      {members.map((member, member_id) => {
        return (
          <FamilyMemberCard
            key={"familyMem_" + member_id.toString()}
            dob={member.dob}
            invitation={member.invitation}
            name={member.name}
            phone={member.phone}
            relationship={member.relationship}
            onOptions={member.onOptions}
            onRemind={member.onRemind}
          />
        );
      })}
    </YStack>
  );
};
