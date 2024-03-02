import { View, Text } from "@unmaze/views";
import { useUser } from "@unmaze/api";

export const APITest = () => {
  const { userData, userError, userIsLoading } = useUser({ id: "nothing" });

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      {userError ? <Text>{userError.toString()}</Text> : null}
      {userIsLoading ? null : (
        <Text>{userData?.data.primary_mobile_number}</Text>
      )}
    </View>
  );
};
