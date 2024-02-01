import { FC } from "react";
import { ListItem, ListItemProps } from "tamagui";

const _ListItem: FC<ListItemProps> = ({ children, subTitle }) => {
  return <ListItem subTitle={subTitle}>{children}</ListItem>;
};

export { _ListItem };
