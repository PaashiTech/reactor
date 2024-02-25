import {
  ProfileIcon,
  FamilyIcon,
  LinkedAccount,
  Settings,
  InviteIcon,
  FaqIcon,
} from "@unmaze/assets";
import {
  FAMILY_STACK_NAVIGATOR,
  MyProfileStackRouteProps,
  PROFILE_STACK_NAVIGATOR,
} from "./types";
import { ReactElement } from "react";

type MyProfileOptionsType = {
  id: number;
  title: string;
  icon: ReactElement;
  navigateTo?: keyof MyProfileStackRouteProps;
}[];

export const myProfileOptions: MyProfileOptionsType = [
  {
    id: 1,
    title: "Profile",
    icon: ProfileIcon,
    navigateTo: PROFILE_STACK_NAVIGATOR,
  },
  {
    id: 2,
    title: "Family",
    icon: FamilyIcon,
    navigateTo: FAMILY_STACK_NAVIGATOR,
  },
  { id: 3, title: "Linked Accounts", icon: LinkedAccount },
  { id: 4, title: "Invite friends", icon: InviteIcon },
  { id: 5, title: "FAQs", icon: FaqIcon },
  { id: 6, title: "Setting", icon: Settings },
];
