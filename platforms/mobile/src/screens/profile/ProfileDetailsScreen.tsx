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
} from "./types";
import { useState } from "react";
import { Warning } from "@unmaze/assets";
import { useVerificationContext } from "./VerificationContextProvider";

const _ProfileDetailsScreen: React.FC<ProfileDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const [warningModal, setWarningModal] = useState<boolean>(false);
  const [editType, setEditType] = useState<"email" | "primary" | "secondary">(
    "email"
  );
  const { setOTPSentTo, setPhoneType } = useVerificationContext();

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
      setEditType("primary");
      setWarningModal(true);
    },
    onEditSecondaryPhone: () => {
      setEditType("secondary");
      setWarningModal(true);
    },
    onEditEmail: () => {
      setEditType("email");
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
              {editType === "email" ? profile.primaryPhone : profile.email}
            </Text>
          </View>
        </View>
        <UnmzGradientButton
          onPress={() => {
            setWarningModal(false);
            editType === "email"
              ? (() => {
                  setOTPSentTo({
                    type: "primary number",
                    value: profile.primaryPhone,
                  });
                  navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                    confirmScreenId: EDIT_EMAIL_SCREEN_ID,
                  });
                })()
              : (() => {
                  setOTPSentTo({ type: "email", value: profile.email });
                  setPhoneType(editType);
                  navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
                    confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
                  });
                })();
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
  content: _ProfileDetailsScreen,
};
