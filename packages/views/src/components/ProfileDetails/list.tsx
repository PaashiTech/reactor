import { YGroup } from "tamagui";
import { _ListItem } from "./listItem";
import { FC } from "react";

type _ListItemProps = {
  title: string;
  subtitle?: string;
  icon?: string;
};

export type _ListProps = {
  items: _ListItemProps[];
};

export const _List: FC<_ListProps> = ({ items }) => {
  return (
    <YGroup>
      {items.map((item, i) => {
        <_ListItem key={i} subTitle={item.subtitle}>
          test
        </_ListItem>;
      })}
    </YGroup>
  );
};
