import {
  ProfileIcon,
  FamilyIcon,
  LinkedAccount,
  Settings,
  InviteIcon,
  FaqIcon,
} from "@unmaze/assets";
import {} from "./types";
import { ReactElement } from "react";
import { StackRouteProps } from "../../navigation/navigators/types";
import { PROFILE_DETAILS_SCREEN_ID } from "../profile/types";
import { FAMILY_ACCOUNTS_SCREEN_ID } from "../family/types";

type MyProfileOptionsType = {
  id: number;
  title: string;
  icon: ReactElement;
  navigateTo?: keyof StackRouteProps;
}[];

export const myProfileOptions: MyProfileOptionsType = [
  {
    id: 1,
    title: "Profile",
    icon: ProfileIcon,
    navigateTo: PROFILE_DETAILS_SCREEN_ID as keyof StackRouteProps,
  },
  {
    id: 2,
    title: "Family",
    icon: FamilyIcon,
    navigateTo: FAMILY_ACCOUNTS_SCREEN_ID as keyof StackRouteProps,
  },
  { id: 3, title: "Linked Accounts", icon: LinkedAccount },
  { id: 4, title: "Invite friends", icon: InviteIcon },
  { id: 5, title: "FAQs", icon: FaqIcon },
  { id: 6, title: "Setting", icon: Settings },
];
