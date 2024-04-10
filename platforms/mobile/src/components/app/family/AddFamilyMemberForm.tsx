import { FormTextInput, MobileNumberInput, DropdownList } from "@unmaze/views";
import { fieldNames } from "../../../screens/family/AddFamilyMemberScreen";
import { Control } from "react-hook-form";

const relationships = [
  "Spouse/Life Partner",
  "Son",
  "Daughter",
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Grandson",
  "Granddaughter",
  "Grandfather",
  "Grandmother",
  "Other",
];

export type RelationshipType = (typeof relationships)[number];

type AddFamilyMembFormProps = {
  control: Control;
};

export const AddFamilyMemberForm: React.FC<AddFamilyMembFormProps> = ({
  control,
}) => {
  return (
    <>
      <FormTextInput
        control={control}
        name={fieldNames.firstName}
        label="First name"
        placeholder="Enter first name"
      />

      <FormTextInput
        control={control}
        name={fieldNames.lastName}
        label="Last name"
        placeholder="Enter last name"
      />

      <DropdownList
        label="Relationship ( They are my )"
        modalTitle="Select Relationship"
        name={fieldNames.relationship}
        selectItems={relationships}
        control={control}
      />

      <MobileNumberInput control={control} name={fieldNames.mobileNumber} />
    </>
  );
};
