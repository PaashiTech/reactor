import { Info } from "@unmaze/assets";
import { AccentText, SVGWrapper, Text, View } from "@unmaze/views";

export const PasswordInfo = () => {
  const InfoData: string[] = [
    "Password must have a minimum length of 8 characters.",
    "Must have at least one uppercase and one lower case letter.",
    "Must contain atleast one number and one special character (such as !, @, #, $, %, etc).",
    "Must not contain user’s first or last name and email id.",
    "Must be difference than the previous password.",
  ];

  return (
    <View
      p={12}
      bg="#F6F2FF"
      gap={8}
      borderRadius={12}
      borderColor={"#BE95FF"}
      borderWidth={1}
    >
      <View paddingHorizontal={2}>
        <View mb={8}>
          <SVGWrapper iconSVG={Info} />
        </View>
        {InfoData.map((info, i) => {
          return (
            <View key={i} flexDirection="row" gap={4}>
              <AccentText fontSize={4} color="#6F6F6F">{`\u25CF`}</AccentText>
              <View flex={1}>
                <AccentText size="xs" color="#6F6F6F" lineHeight="$2">
                  {info}
                </AccentText>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
