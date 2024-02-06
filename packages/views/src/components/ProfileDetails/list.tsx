import { FC } from "react";
import { YStack } from "tamagui";
import { ProfileDetailsListItem } from "../_core/ListItem";

// import { Edit3 } from "@tamagui/lucide-icons";
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
    <YStack>
      {items.map((item, i) => {
        const _icon = item.icon ? Edit : null;
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
