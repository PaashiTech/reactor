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

export type InvitationStatus = "Invited" | "Declined" | "Expired" | "Accepted";
export type Invitation = {
  id: string;
  status: InvitationStatus;
  send_at: string; // ISO string
  receiver?: FamilyMember;
  sender?: FamilyMember;
};
export type FamilyMember = {
  id?: string;
  name: Name;
  phone: string;
  relation: Relationship;
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
  setState: (newState: Partial<UserState>) => void;
};
