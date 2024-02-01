import { YGroup } from "tamagui";
import { _ListItem } from "./listItem";
import { FC } from "react";

import { Edit3 } from "@tamagui/lucide-icons";

type _ListItemProps = {
  title: string;
  subtitle?: string;
  icon?: boolean;
};

export type _ListProps = {
  items: _ListItemProps[];
};

export const _List: FC<_ListProps> = ({ items }) => {
  return (
    <YGroup>
      {items.map((item, i) => {
        const _icon = item.icon ? Edit3 : null;
        return (
          <_ListItem
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
