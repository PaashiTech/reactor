import { UserEmpty } from "@unmaze/assets";
import { BodyText, HeadingText, View } from "@unmaze/views";

export const FamilyEmpty: React.FC = () => {
  return (
    <View paddingHorizontal={20} paddingVertical={94} ai="center" gap={40}>
      <UserEmpty />
      <View gap={8}>
        <HeadingText
          size="xl"
          textAlign="center"
          paddingHorizontal={30}
          color="#161616"
        >
          You haven't added any family members
        </HeadingText>
        <BodyText textAlign="center" color="#525252">
          Invite family members to manage all of your family's investments at
          one place and more. Track financial progress and benefit from insights
          on investments.
        </BodyText>
      </View>
    </View>
  );
};
