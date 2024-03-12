import { Text, TextProps, View, ViewProps } from "@unmaze/views";

export const TextWithHeader = ({ children }) => {
  return (
    <View gap={2} flexGrow={1}>
      {children}
    </View>
  );
};

const Header: React.FC<TextProps> = ({ children }) => {
  return (
    <Text
      fontSize={12}
      fontWeight={"400"}
      letterSpacing={0.24}
      color={"#6f6f6f"}
      lineHeight={16}
    >
      {children}
    </Text>
  );
};

const Content: React.FC<TextProps> = ({ children }) => {
  return (
    <Text
      color={"#262626"}
      fontWeight={"500"}
      letterSpacing={0.28}
      lineHeight={18}
    >
      {children}
    </Text>
  );
};

TextWithHeader.Header = Header;
TextWithHeader.Content = Content;
