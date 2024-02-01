import { View, ProfileDetails } from "@unmaze/views";

export const ProfileDetailsTest1 = () => {
  return (
    <View>
      <ProfileDetails
        items={[
          {
            title: "Piyush Dhanajay Sarda",
            subtitle: "Name",
          },
          {
            title: "08-Nov-1998",
            subtitle: "DOB",
          },
          {
            title: "DJFPD8191A",
            subtitle: "Pan number",
          },
          {
            title: "+91 - 8327812999",
            subtitle: "Primary mobile number",
            icon: true,
          },
          {
            title: "piyushsarda24@gmail.com",
            subtitle: "Email address",
            icon: true,
          },
          {
            title: "Single",
            subtitle: "Marital status",
          },
          {
            title: "Male",
            subtitle: "Gender",
          },
          {
            title: "+91 - 8327812999",
            subtitle: "Secondary mobile number",
            icon: true,
          },
        ]}
      />
    </View>
  );
};
