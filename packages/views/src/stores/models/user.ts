type MaritalStatus = "Single" | "Married" | "Divorcee" | "PreferNotToSay";
type Gender = "Male" | "Female" | "NonBinary" | "PreferNotToSay";
type Name = {
  first: string;
  middle: string;
  last: string;
};
type Relationship =
  | "LifePartner"
  | "Son"
  | "Daughter"
  | "Father"
  | "Mother"
  | "Brother"
  | "Sister"
  | "Grandson"
  | "Granddaughter"
  | "Grandfather"
  | "Grandmother"
  | "Other";

type InvitationStatus = "Invited" | "Declined" | "Expired" | "Done";
type FamilyMember = {
  name: Name;
  status: InvitationStatus;
  phone: string;
  dob: string; // ISO string
  relationship: Relationship;
};

export type UserState = {
  user_id: string;
  name: Name;
  dob: string; // ISO string
  pan: string;
  phone: {
    primary: string;
    secondary?: string;
  };
  email: string;
  marital_status: MaritalStatus;
  gender: Gender;
  family: FamilyMember[];
};

export type UserActions = {
  setState: (newState: UserState) => void;
};
