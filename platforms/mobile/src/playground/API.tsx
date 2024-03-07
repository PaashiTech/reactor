import { View, Text, useUserStore } from "@unmaze/views";
import { useUser } from "@unmaze/api";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

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

const constructFullName = (nameObj) => {
  return (
    nameObj.first +
    " " +
    (nameObj.middle ? nameObj.middle + " " : "") +
    nameObj.last
  );
};

export const APINoFetchTest = () => {
  const name = useUserStore((state) => state.name);
  const dob = useUserStore((state) => state.dob);
  const pan = useUserStore((state) => state.pan);
  const phone = useUserStore((state) => state.phone);
  const email = useUserStore((state) => state.email);
  const marital_status = useUserStore((state) => state.marital_status);
  const gender = useUserStore((state) => state.gender);
  const family = useUserStore((state) => state.family);

  const dobObject = new Date(dob);

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text>{constructFullName(name)}</Text>
      <Text>
        {dobObject.getDate().toString() +
          "-" +
          months[dobObject.getMonth()] +
          "-" +
          dobObject.getFullYear().toString()}
      </Text>
      <Text>{pan}</Text>
      <Text>{phone.primary}</Text>
      <Text>{phone.secondary ? phone.secondary : "No secondary number"}</Text>
      <Text>{email}</Text>
      <Text>{marital_status}</Text>
      <Text>{gender}</Text>
      <Text>
        {family
          .map((fm) => constructFullName(fm.name))
          .reduce((fm_n) => fm_n + ", ")}
      </Text>
    </View>
  );
};
