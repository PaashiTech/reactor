/**
 * @name ProfileDetails
 *
 * @description
 * A component to show profile details of the user
 */

import { FC } from "react";
import { ProfileDetailsList, ProfileDetailsListProps } from "./list";

export type ProfileDetailsProps = {
  name: string,
  dob: string,
  pan: string,
  primaryPhone: string,
  secondaryPhone: string,
  gender: "Male" | "Female" | "Non-binary",
  email: string,
  maritalStatus: "Single" | "Married" | "Divorcee"
}

const profileDetailsListItemsData = [
  {key: "name", subtitle: "Name", icon: false},
  {key: "dob", subtitle: "DOB", icon: false},
  {key: "pan", subtitle: "Pan number", icon: false},
  {key: "primaryPhone", subtitle: "Primary mobile number", icon: true},
  {key: "email", subtitle: "Email address", icon: true},
  {key: "maritalStatus", subtitle: "Marital status", icon: false},
  {key: "gender", subtitle: "Gender", icon: false},
  {key: "secondaryPhone", subtitle: "Secondary mobile number", icon: true}
]

export const ProfileDetails: FC<ProfileDetailsProps> = (profileDetails) => {
  const _profileDetailsListProps: ProfileDetailsListProps = {
    items: profileDetailsListItemsData.map((item) => {return { title: profileDetails[item.key], subtitle: item.subtitle, icon: item.icon}})
  }

  return <ProfileDetailsList {..._profileDetailsListProps} />;
};
