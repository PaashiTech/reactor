import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileDetails, ProfileDetailsProps, View } from "@unmaze/views";
import { UnmzStackNavRouteProps, Screen } from "../types";

export const _ProfileDetailsScreen: React.FC<
  NativeStackScreenProps<UnmzStackNavRouteProps, "0010">
> = ({ navigation, route }) => {
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
      alert("Edit primary phone");
    },
    onEditSecondaryPhone: () => {
      alert("Edit secondary phone");
    },
    onEditEmail: () => {
      alert("Edit email");
    },
  };

  return (
    <View paddingVertical={10} paddingHorizontal={20} backgroundColor={"white"}>
      <ProfileDetails {...profile} />
    </View>
  );
};

export const ProfileDetailsScreen: Screen = {
  key: "0010",
  title: "Profile Details",
  background: "linear-gradient",
  content: _ProfileDetailsScreen,
};
