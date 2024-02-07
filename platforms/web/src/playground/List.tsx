import { View, ProfileDetails, ProfileDetailsProps } from "@unmaze/views";

export const ProfileDetailsTest1 = () => {
  const profile: ProfileDetailsProps = {
    name: "Piyush Dhananjay Sarda",
    dob: "08-Nov-1998",
    pan: "DJFPD8191A",
    primaryPhone: "+91 - 8327812999",
    secondaryPhone: "+91 - 8327812999",
    gender: "Male",
    email: "piyushsarda24@gmail.com",
    maritalStatus: "Single",
    onEditEmail: () => {},
    onEditPrimaryPhone: () => {},
    onEditSecondaryPhone: () => {},
  };

  return (
    <View paddingVertical={10} paddingHorizontal={20}>
      <ProfileDetails {...profile} />
    </View>
  );
};
