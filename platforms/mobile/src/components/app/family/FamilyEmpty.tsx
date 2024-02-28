import { UserEmpty } from "@unmaze/assets";
import { Text, View } from "@unmaze/views";

export const FamilyEmpty: React.FC = () => {
  return (
    <View paddingHorizontal={20} paddingVertical={94} ai="center" gap={40}>
      <UserEmpty />
      <View gap={8}>
        <Text
          textAlign="center"
          fontSize={20}
          fontWeight={"600"}
          letterSpacing={0.4}
          lineHeight={24}
          paddingHorizontal={30}
          color={"#161616"}
        >
          You haven't added any family members
        </Text>
        <Text
          textAlign="center"
          fontSize={14}
          lineHeight={18}
          color="#525252"
          fontWeight={"$4"}
          letterSpacing={0.28}
        >
          Invite family members to manage all of your family's investments at
          one place and more. Track financial progress and benefit from insights
          on investments.
        </Text>
      </View>
    </View>
  );
};
