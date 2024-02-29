import {
  ProfileDetails,
  ProfileDetailsProps,
  BottomModal,
  UnmzGradientButton,
  View,
  Text,
} from "@unmaze/views";
import {
  ProfileScreen,
  ProfileDetailsScreenProps,
  OTP_VERIFICATION_SCREEN_ID,
  PROFILE_DETAILS_SCREEN_ID,
  EDIT_PH_NUMBER_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
  EditType,
} from "./types";
import { useState } from "react";
import { Warning } from "@unmaze/assets";

const _ProfileDetailsScreen: React.FC<ProfileDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const [warningModal, setWarningModal] = useState<boolean>(false);
  const [editType, setEditType] = useState<EditType>();

  const profile: ProfileDetailsProps = {
    name: "Piyush Dhananjay Sarda",
    dob: "08-Nov-1998",
    pan: "DJFPD8191A",
    primaryPhone: "+91 - 8327812999",
    secondaryPhone: "+91 - 8327812999",
    gender: "Male",
    email: "piyushsarda24@gmail.com",
    maritalStatus: "Single",
    onEditPrimaryPhone: () => {
      setEditType("email");
      setWarningModal(true);
    },
    onEditSecondaryPhone: () => {
      setEditType("email");
      setWarningModal(true);
    },
    onEditEmail: () => {
      setEditType("primary");
      setWarningModal(true);
    },
  };

  return (
    <View flex={1}>
      <ProfileDetails {...profile} />

      {/* Verification warning modal */}
      <BottomModal
        open={warningModal}
        setOpen={setWarningModal}
        contentStyle={{
          paddingVertical: 24,
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <View flex={1} flexDirection="row" gap={10}>
          <View alignItems="flex-start">
            <Warning />
          </View>
          <View flex={1}>
            <Text fontSize={12}>
              To edit any KYC details, you need to first verify your registered
              account by entering OTP sent to
            </Text>
            <Text fontSize={12}>
              {editType === "email"
                ? profile.email
                : editType === "primary"
                ? profile.primaryPhone
                : profile.secondaryPhone}
            </Text>
          </View>
        </View>
        <UnmzGradientButton
          onPress={() => {
            setWarningModal(false);
            editType === "email"
              ? navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                  confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
                  sentToType: "email",
                  sentToValue: profile.email,
                })
              : editType === "primary"
              ? navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                  confirmScreenId: EDIT_EMAIL_SCREEN_ID,
                  sentToType: "primary",
                  sentToValue: profile.primaryPhone,
                })
              : navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                  confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
                  sentToType: "email",
                  sentToValue: profile.email,
                });
          }}
        >
          Continue
        </UnmzGradientButton>
      </BottomModal>
    </View>
  );
};

export const ProfileDetailsScreen: ProfileScreen = {
  key: PROFILE_DETAILS_SCREEN_ID,
  title: "Profile Details",
  headerBackground: "plain",
  content: _ProfileDetailsScreen,
};
