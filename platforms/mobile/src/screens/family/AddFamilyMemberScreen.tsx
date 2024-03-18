import { KeyboardAvoidingView } from "react-native";
import { useForm, FieldValues } from "react-hook-form";
import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  AddFamilyMemberScreenProps,
  OTP_FAMILY_MEMBER_SCREEN_ID,
} from "./types";
import {
  ScrollView,
  UnmzGradientButton,
  View,
  useUserStore,
} from "@unmaze/views";
import { Whatsapp, WhatsappDisabled } from "@unmaze/assets";
import { TertiaryButton } from "@unmaze/views/src/components";
import { AddFamilyMemberForm, KeyBenefits } from "../../components/app/family";
import { RelationshipType } from "../../components/app/family";
import { UnmzNavScreen } from "../types";
import { useAddFamilyMember } from "@unmaze/api";
import { USER_PROFILE_SCREEN_ID } from "../user-profile";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { OTPSentToType } from "../../navigation/navigators/stackContext/utility.types";
import { ACCOUNT_UPDATE_SUCCESS_SCREEN_ID } from "../shared";

type FamilyFormData = {
  firstName: string;
  lastName: string;
  relationship: RelationshipType | undefined;
  dob: Date | undefined;
  mobileNumber: string;
};

const defaultValues: FamilyFormData = {
  firstName: "",
  lastName: "",
  relationship: undefined,
  dob: undefined,
  mobileNumber: "",
};

const _AddFamilyMemberScreen: React.FC<AddFamilyMemberScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FieldValues>({
    defaultValues,
  });

  const user_id = useUserStore((state) => state.user_id);
  const {
    addFamilyMember,
    addFamilyMemberData,
    addFamilyMemberError,
    addFamilyMemberIsLoading,
    addFamilyMemberStatus,
  } = useAddFamilyMember({
    id: user_id,
  });

  const { dispatch } = useStackContext();

  const isButtonDisabled = !isDirty;

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  const navigateOnSuccess = (data: FamilyFormData) => {
    dispatch({
      type: "SET_OTP_SENT_TO",
      payload: { type: OTPSentToType.PRIMARY_NUMBER, value: data.mobileNumber },
    });
    dispatch({
      type: "SET_VERIFIED_MESSAGE",
      payload: `You have successfully added your ${data.relationship} in your family account`,
    });
    navigation.navigate(OTP_FAMILY_MEMBER_SCREEN_ID, {
      confirmScreenId: ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
    });
  };

  const handleInviteOTP = (data: FamilyFormData) => {
    console.log(data);
    addFamilyMember({
      params: {},
      body: {
        name: {
          first: capitalize(data.firstName),
          last: capitalize(data.lastName),
        },
        dob: data.dob,
        phone: data.mobileNumber,
        relationship: data.relationship,
      },
      onSuccess: () => navigateOnSuccess(data),
    });
  };

  const handleInviteWhatsapp = (data: FamilyFormData) => {
    console.log(data);
  };

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

export const AddFamilyMemberScreen: UnmzNavScreen = {
  key: ADD_FAMILY_MEMBER_SCREEN_ID,
  title: "Add family member",
  content: _AddFamilyMemberScreen,
};
