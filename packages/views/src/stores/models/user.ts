type MaritalStatus = "single" | "married" | "divorcee";
type Gender = "male" | "female" | "non-binary" | "prefer-not-say";
type Name = {
  first: string;
  middle: string;
  last: string;
};
type Relationship =
  | "life-partner"
  | "son"
  | "daughter"
  | "father"
  | "mother"
  | "brother"
  | "sister"
  | "grandson"
  | "granddaughter"
  | "grandfather"
  | "grandmother"
  | "other";

type InvitationStatus = "invited" | "declined" | "expired" | "done";
type FamilyMember = {
  name: Name;
  status: InvitationStatus;
  phone: string;
  dob: string; // ISO string
  relationship: Relationship;
};

type User = {
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
