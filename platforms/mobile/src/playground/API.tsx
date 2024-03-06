import { View, Text, useUserStore } from "@unmaze/views";
import { useUser } from "@unmaze/api";

export const APITest = () => {
  const { userData, userError, userIsLoading } = useUser({ id: "nothing" });

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      {userError ? <Text>{userError.toString()}</Text> : null}
      {userIsLoading ? null : <Text>{userData?.name}</Text>}
    </View>
  );
};

export const APINoFetchTest = () => {
  const fullName = useUserStore((state) => state.getFullName());

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text>{fullName}</Text>
    </View>
  );
};
