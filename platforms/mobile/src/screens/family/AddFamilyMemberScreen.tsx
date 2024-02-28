import { KeyboardAvoidingView } from "react-native";
import { useForm, FieldValues } from "react-hook-form";
import { AddFamilyMemberScreenProps, FamilyScreen } from "./types";
import { ScrollView, UnmzGradientButton, View } from "@unmaze/views";
import { Whatsapp, WhatsappDisabled } from "@unmaze/assets";
import { TertiaryButton } from "@unmaze/views/src/components";
import { KeyBenefits } from "../../components/KeyBenefits";
import { RelationshipsType } from "../../components/SelectRelationship";
import { AddFamilyMemberForm } from "../../components/AddFamilyMemberForm";

type FormData = {
  firstName: string;
  lastName: string;
  relationship: RelationshipsType | undefined;
  dob: Date | undefined;
  mobileNumber: string;
};

const defaultValues: FormData = {
  firstName: "",
  lastName: "",
  relationship: undefined,
  dob: undefined,
  mobileNumber: "",
};

const _AddFamilyMemberScreen: React.FC<AddFamilyMemberScreenProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FieldValues>({
    defaultValues,
  });

  const isButtonDisabled = !isDirty;

  const handleInviteOTP = (data) => {
    console.log(data);
  };

  const handleInviteWhatsapp = (data) => {
    console.log(data);
  };

  return (
    <View flex={1} bg={"white"}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView flex={1}>
          <View flex={1} p={20} justifyContent="space-between">
            <View gap={24}>
              <KeyBenefits />
              <AddFamilyMemberForm control={control} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View gap={12} padding={20}>
        <TertiaryButton
          disabled={isButtonDisabled}
          onPress={handleSubmit(handleInviteOTP)}
        >
          Invite using OTP
        </TertiaryButton>
        <UnmzGradientButton
          disabled={isButtonDisabled}
          icon={
            isButtonDisabled ? (
              <WhatsappDisabled width={20} height={20} />
            ) : (
              <Whatsapp width={20} height={20} />
            )
          }
          onPress={handleSubmit(handleInviteWhatsapp)}
        >
          Invite using Whatsapp
        </UnmzGradientButton>
      </View>
    </View>
  );
};

export const AddFamilyMemberScreen: FamilyScreen = {
  key: "0020.b.1",
  title: "Add family member",
  headerBackground: "plain",
  content: _AddFamilyMemberScreen,
};
