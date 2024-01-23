import { Text } from "tamagui";

interface MyComponentProps {
  children: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <Text fontSize="$8" color='$color' backgroundColor='$background'>{children}</Text>
    </>
  );
};

export default MyComponent;
