import { View, ProfileDetails, YGroup, ListItem } from "@unmaze/views";

export const ProfileDetailsTest1 = () => {
  return (
    <View>
      <ProfileDetails
        items={[
          {
            title: "item 1",
            subtitle: "item 1 subtitle",
            icon: true,
          },
          {
            title: "item 2",
            subtitle: "item 2 subtitle",
          },
        ]}
      />
    </View>
  );
};
