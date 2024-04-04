import { RelationshipType } from "../../components/app/family";

export type FamilyFormDataType = {
  firstName: string;
  lastName: string;
  relationship: RelationshipType | null;
  mobileNumber: string;
};
