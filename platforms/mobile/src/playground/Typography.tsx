import { AccentText, BodyText, HeadingText, View } from "@unmaze/views";

export const Typography: React.FC = () => {
  return (
    <View flex={1} paddingTop={50} paddingLeft={10} gap={10}>
      <HeadingText size="sm">Heading</HeadingText>
      <HeadingText size="md">Heading</HeadingText>
      <HeadingText size="lg">Heading</HeadingText>
      <HeadingText size="xl">Heading</HeadingText>
      <BodyText size="xs">This is Body Text</BodyText>
      <BodyText size="sm">This is Body Text</BodyText>
      <BodyText size="md">This is Body Text</BodyText>
      <BodyText size="lg">This is Body Text</BodyText>
      <AccentText size="xs">This is Accent Text</AccentText>
      <AccentText size="sm">This is Accent Text</AccentText>
      <AccentText size="md">This is Accent Text</AccentText>
      <AccentText size="lg">This is Accent Text</AccentText>
    </View>
  );
};
