import { AddFamilyMemberScreenProps, FamilyScreen } from "./types";
import {
  UnmzGradientButton,
  View,
  FormTextInput,
  MobileNumberInput,
  ScrollView,
} from "@unmaze/views";
import { Whatsapp, WhatsappDisabled } from "@unmaze/assets";
import { KeyBenefits } from "../../components/KeyBenefits";
import { SelectRelationship } from "../../components/SelectRelationship";
import { KeyboardAvoidingView } from "react-native";
import { TertiaryButton } from "@unmaze/views/src/components";
import { DateTimePicker } from "../../components/DateTimePicker";

const _AddFamilyMemberScreen: React.FC<AddFamilyMemberScreenProps> = () => {
  const buttonDisabled = false;

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
              <FormTextInput
                label="First name"
                placeholder="Enter first name"
              />
              <FormTextInput label="Last name" placeholder="Enter last name" />
              <SelectRelationship />
              <DateTimePicker />
              <MobileNumberInput
                mobileNumberValue=""
                handleMobileNumberChange={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View gap={12} padding={20}>
        <TertiaryButton disabled={buttonDisabled}>
          Invite using OTP
        </TertiaryButton>
        <UnmzGradientButton
          disabled={buttonDisabled}
          icon={
            buttonDisabled ? (
              <WhatsappDisabled width={20} height={20} />
            ) : (
              <Whatsapp width={20} height={20} />
            )
          }
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
