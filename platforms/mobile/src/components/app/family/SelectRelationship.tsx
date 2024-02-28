import { Control } from "react-hook-form";
import { SelectCustom } from "@unmaze/views";

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
] as const;

export type RelationshipType = (typeof relationships)[number];

interface SelectRelationShipProps {
  control: Control;
}

export const SelectRelationship: React.FC<SelectRelationShipProps> = ({
  control,
}) => {
  return (
    <SelectCustom
      label="Relationship"
      modalTitle="Select Relationship"
      name="relationship"
      selectItems={relationships}
      control={control}
      rules={{
        required: {
          value: true,
          message: "Select Relationship",
        },
      }}
    />
  );
};
