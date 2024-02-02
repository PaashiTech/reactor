import { FC } from "react";
import { YGroup } from "tamagui";
import { ProfileDetailsListItem } from "../_core/ListItem";

import { Edit3 } from "@tamagui/lucide-icons";

type _ProfileDetailsListItemProps = {
  title: string;
  subtitle?: string;
  icon?: boolean;
};

export type ProfileDetailsListProps = {
  items: _ProfileDetailsListItemProps[];
};

export const ProfileDetailsList: FC<ProfileDetailsListProps> = ({ items }) => {
  return (
    <YGroup>
      {items.map((item, i) => {
        const _icon = item.icon ? Edit3 : null;
        return (
          <ProfileDetailsListItem
            iconAfter={_icon}
            key={i}
            title={item.title}
            subTitle={item.subtitle}
          />
        );
      })}
    </YGroup>
  );
};
