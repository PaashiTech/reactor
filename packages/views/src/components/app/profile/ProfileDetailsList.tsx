import { FC } from "react";
import { YStack } from "tamagui";
import { ProfileDetailsListItem } from "./ProfileDetailsListItem";

import { Edit } from "@unmaze/assets";

export type ProfileDetailsListItem = {
  title: string;
  subtitle?: string;
  icon?: boolean;
  onPressIcon?: () => void;
};

export type ProfileDetailsListProps = {
  items: ProfileDetailsListItem[];
};

export const ProfileDetailsList: FC<ProfileDetailsListProps> = ({ items }) => {
  return (
    <YStack marginTop={24} paddingVertical={12} backgroundColor="#fff">
      {items.map((item, i) => {
        const _icon = item.icon ? Edit : null;
        if (!item.title) return;
        return (
          <ProfileDetailsListItem
            iconAfter={_icon}
            key={i}
            title={item.title}
            subTitle={item.subtitle}
            onIconPress={item.onPressIcon}
          />
        );
      })}
    </YStack>
  );
};
