import { AddFamilyMemberScreenProps, FamilyScreen } from "./types";
import {
  UnmzGradientButton,
  View,
  FormTextInput,
  MobileNumberInput,
  CalendarPicker,
  ScrollView,
} from "@unmaze/views";
import { Plus } from "@unmaze/assets";
import { KeyBenefits } from "../../components/KeyBenefits";
import { SelectRelationship } from "../../components/SelectRelationship";
import { KeyboardAvoidingView } from "react-native";

const _AddFamilyMemberScreen: React.FC<AddFamilyMemberScreenProps> = () => {
  return (
    <View flex={1}>
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
              <CalendarPicker />
              <MobileNumberInput
                mobileNumberValue=""
                handleMobileNumberChange={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View gap={12} padding={20}>
        <UnmzGradientButton disabled>Invite using OTP</UnmzGradientButton>
        <UnmzGradientButton disabled icon={Plus}>
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
