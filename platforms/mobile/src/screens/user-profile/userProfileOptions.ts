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
import { SETTINGS_DETAILS_SCREEN_ID } from "../settings/types";
import { LINKED_ACCOUNTS_SCREEN_ID } from "../linked-accounts/types";

type UserProfileOptionsType = {
  id: number;
  title: string;
  icon: ReactElement;
  navigateTo?: keyof StackRouteProps;
  routeProps?: any;
}[];

export const userProfileOptions: UserProfileOptionsType = [
  {
    id: 1,
    title: "Profile",
    icon: ProfileIcon,
    navigateTo: PROFILE_DETAILS_SCREEN_ID,
  },
  {
    id: 2,
    title: "Family",
    icon: FamilyIcon,
    navigateTo: FAMILY_ACCOUNTS_SCREEN_ID,
  },
  {
    id: 3,
    title: "Linked Accounts",
    icon: LinkedAccount,
    navigateTo: LINKED_ACCOUNTS_SCREEN_ID,
  },
  { id: 4, title: "Invite friends", icon: InviteIcon },
  { id: 5, title: "FAQs", icon: FaqIcon },
  {
    id: 6,
    title: "Setting",
    icon: Settings,
    navigateTo: SETTINGS_DETAILS_SCREEN_ID,
  },
];
