import { AccentText, BodyText, TextProps, View } from "@unmaze/views";

export const TextWithHeader = ({ children }) => {
  return (
    <View gap={2} flexGrow={1}>
      {children}
    </View>
  );
};

const Header: React.FC<TextProps> = ({ children }) => {
  return (
    <BodyText size="sm" color="#6F6F6F">
      {children}
    </BodyText>
  );
};

const Content: React.FC<TextProps> = ({ children }) => {
  return <AccentText color="#262626">{children}</AccentText>;
};

TextWithHeader.Header = Header;
TextWithHeader.Content = Content;
