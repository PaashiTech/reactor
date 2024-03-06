import { View, Text, useUserStore } from "@unmaze/views";
import { useUser } from "@unmaze/api";
import { useEffect } from "react";

export const APITest = () => {
  const { userData, userError, userIsLoading } = useUser({
    id: "16cd063a-071b-46bf-80eb-654766e4911c",
  });

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      {userError ? <Text>{userError.toString()}</Text> : null}
      {userIsLoading ? null : <Text>{userData?.data.name.first}</Text>}
    </View>
  );
};

export const APINoFetchTest = () => {
  const name = useUserStore((state) => state.name);

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text>
        {name.first + " " + (name.middle ? name.middle + " " : "") + name.last}
      </Text>
    </View>
  );
};
