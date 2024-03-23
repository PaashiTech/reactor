export type MaritalStatus =
  | "Single"
  | "Married"
  | "Divorcee"
  | "PreferNotToSay";
export type Gender = "Male" | "Female" | "NonBinary" | "PreferNotToSay";
export type Name = {
  first: string;
  middle: string;
  last: string;
};
export type Relationship =
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

export type InvitationStatus = "Invited" | "Declined" | "Expired" | "Done";
export type Invitation = {
  status: InvitationStatus;
  created_at: string; // ISO string
};
export type FamilyMember = {
  name: Name;
  invitation: Invitation;
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
