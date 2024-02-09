import {
  ProfileDetails,
  ProfileDetailsProps,
  BottomModal,
  UnmzGradientButton,
  View,
  Text,
} from "@unmaze/views";
import {
  Screen,
  OTP_VERIFICATION_SCREEN_ID,
  PROFILE_DETAILS_SCREEN_ID,
  EDIT_PH_NUMBER_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
  ProfileDetailsScreenProps,
} from "../types";
import { useState } from "react";
import { Warning } from "@unmaze/assets";

export const _ProfileDetailsScreen: React.FC<ProfileDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const [warningModal, setWarningModal] = useState<boolean>(false);
  const [emailOrPhone, setEmailOrPhone] = useState<"email" | "phone">("email");

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
      setEmailOrPhone("email");
      setWarningModal(true);
    },
    onEditSecondaryPhone: () => {
      alert("Edit secondary phone");
    },
    onEditEmail: () => {
      setEmailOrPhone("phone");
      setWarningModal(true);
    },
  };

  return (
    <View paddingVertical={10} paddingHorizontal={20} backgroundColor={"white"}>
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
              {emailOrPhone === "email" ? profile.email : profile.primaryPhone}
            </Text>
          </View>
        </View>
        <UnmzGradientButton
          onPress={() => {
            setWarningModal(false);
            emailOrPhone === "email"
              ? navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                  confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
                  sentToType: "email",
                  sentToValue: "piyushsarda24@gmail.com",
                })
              : navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                  confirmScreenId: EDIT_EMAIL_SCREEN_ID,
                  sentToType: "number",
                  sentToValue: "+91-8327812999",
                });
          }}
        >
          Continue
        </UnmzGradientButton>
      </BottomModal>
    </View>
  );
};

export const ProfileDetailsScreen: Screen = {
  key: PROFILE_DETAILS_SCREEN_ID,
  title: "Profile Details",
  background: "linear-gradient",
  content: _ProfileDetailsScreen,
};
