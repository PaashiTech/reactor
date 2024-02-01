import { View, ProfileDetails, YGroup, ListItem } from "@unmaze/views";

export const ProfileDetailsTest1 = () => {
  return (
    <View>
      <YGroup>
        <ListItem>Test1</ListItem>
        <ListItem>Test2</ListItem>
      </YGroup>
      {/* <ProfileDetails
        items={[
          {
            title: "item 1",
          },
          {
            title: "item 2",
          },
        ]}
      /> */}
    </View>
  );
};
