import { FormTextInput, MobileNumberInput } from "@unmaze/views";
import { View } from "@unmaze/views";
import { SelectRelationship } from "./SelectRelationship";
import { DatePicker } from "./DateTimePicker";
import { Control } from "react-hook-form";

interface AddFamilyMembFormProps {
  control: Control;
}

export const AddFamilyMemberForm: React.FC<AddFamilyMembFormProps> = ({
  control,
}) => {
  return (
    <>
      <FormTextInput
        control={control}
        name="firstName"
        label="First name"
        placeholder="Enter first name"
        rules={{
          required: {
            value: true,
            message: "First name is required",
          },
          minLength: {
            value: 3,
            message: "First name should have more than 3 letters",
          },
        }}
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Last name"
        placeholder="Enter last name"
        rules={{
          required: {
            value: true,
            message: "Last name is required",
          },
          minLength: {
            value: 3,
            message: "Last name should have more than 3 letters",
          },
        }}
      />

      <SelectRelationship control={control} />

      <DatePicker control={control} label="Date of birth" name="dob" />

      <MobileNumberInput control={control} name="mobileNumber" />
    </>
  );
};
