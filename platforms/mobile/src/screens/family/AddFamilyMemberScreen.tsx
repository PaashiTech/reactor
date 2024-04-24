import { KeyboardAvoidingView } from "react-native";
import { FieldValues, useForm } from "react-hook-form";
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
import { UnmzNavScreen } from "../types";
import { useAddFamilyMember, useGetUser } from "@unmaze/api";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { OTPSentToType } from "../../navigation/navigators/stackContext/utility.types";
import { ACCOUNT_UPDATE_SUCCESS_SCREEN_ID } from "../shared";
import { FamilyFormDataType } from "./utility.types";
import { capitalize } from "./helpers";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[a-z]+$/i, "Should only contain alphabets"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[a-z]+$/i, "Should only contain alphabets"),

  relationship: z.string().min(1, "Select Relatioship"),
  mobileNumber: z
    .string()
    .min(1, "Mobile Number is required")
    .regex(/^[0-9]+$/, "Only numeric inputs allowed"),
});

export type SchemaType = z.infer<typeof schema>;

type FieldNamesType = { [key in keyof SchemaType]: string };

export const fieldNames: FieldNamesType = Object.keys(schema.shape).reduce(
  (acc, curr) => ({ ...acc, [curr]: curr }),
  {} as FieldNamesType
);

const defaultValues: SchemaType = {
  firstName: "",
  lastName: "",
  relationship: "",
  mobileNumber: "",
};

const _AddFamilyMemberScreen: React.FC<AddFamilyMemberScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isDirty },
  } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const user_id = useUserStore((state) => state.user_id);
  const { addFamilyMember } = useAddFamilyMember({
    id: user_id,
  });

  const { userMutate } = useGetUser({ id: user_id });

  const { dispatch } = useStackContext();

  const isButtonDisabled = !isDirty;

  const navigateOnSuccess = (data: FamilyFormDataType) => {
    dispatch({
      type: "SET_OTP_SENT_TO",
      payload: { type: OTPSentToType.PRIMARY_NUMBER, value: data.mobileNumber },
    });
    dispatch({
      type: "SET_VERIFIED_MESSAGE",
      payload: `You have successfully added your ${data.relationship} in your family account`,
    });
    userMutate();
    navigation.navigate(OTP_FAMILY_MEMBER_SCREEN_ID, {
      confirmScreenId: ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
    });
  };

  const handleInviteOTP = (data: FamilyFormDataType) => {
    /**
     * Manual validation needed for the rules that need to apply
     * only on submit
     * */

    if (
      data.firstName.length <= 3 ||
      data.lastName.length <= 3 ||
      data.mobileNumber.length < 10
    ) {
      if (data.firstName.length < 3) {
        setError("firstName", {
          type: "minLength",
          message: "First name should have more than 3 letters",
        });
      }
      if (data.lastName.length < 3) {
        setError("lastName", {
          type: "minLength",
          message: "Last name should have more than 3 letters",
        });
      }
      if (data.mobileNumber.length < 10) {
        setError("mobileNumber", {
          type: "minLength",
          message: "Mobile number must contain 10 characters",
        });
      }
      return;
    }

    // Form ok here - Call the add family member API

    addFamilyMember({
      params: {},
      body: {
        name: {
          first: capitalize(data.firstName),
          last: capitalize(data.lastName),
        },
        phone: data.mobileNumber,
        relationship: data.relationship,
      },
      onSuccess: () => navigateOnSuccess(data),
    });
  };

  const handleInviteWhatsapp = (data: FamilyFormDataType) => {
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
