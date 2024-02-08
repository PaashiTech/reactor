import { ProfileDetails, ProfileDetailsProps, View } from "@unmaze/views";
import {
  Screen,
  OTP_VERIFICATION_SCREEN_ID,
  PROFILE_DETAILS_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
  ProfileDetailsScreenProps,
  EDIT_PH_NUMBER_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
} from "../types";

export const _ProfileDetailsScreen: React.FC<ProfileDetailsScreenProps> = ({
  navigation,
  route,
}) => {
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
      navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
        confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
        sentToType: "email",
        sentToValue: "piyushsarda24@gmail.com",
      });
    },
    onEditSecondaryPhone: () => {
      alert("Edit secondary phone");
    },
    onEditEmail: () => {
      navigation.navigate(OTP_VERIFICATION_SCREEN_ID, {
        confirmScreenId: EDIT_EMAIL_SCREEN_ID,
        sentToType: "number",
        sentToValue: "+91-8327812999",
      });
    },
  };

  return (
    <View paddingVertical={10} paddingHorizontal={20} backgroundColor={"white"}>
      <ProfileDetails {...profile} />
    </View>
  );
};

export const ProfileDetailsScreen: Screen = {
  key: PROFILE_DETAILS_SCREEN_ID,
  title: "Profile Details",
  background: "linear-gradient",
  content: _ProfileDetailsScreen,
};
