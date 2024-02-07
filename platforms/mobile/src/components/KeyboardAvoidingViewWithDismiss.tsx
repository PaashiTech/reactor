import {
  Keyboard,
  KeyboardAvoidingView,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

type KeyboardAvoidingViewWithDismissProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const KeyboardAvoidingViewWithDismiss: React.FC<
  KeyboardAvoidingViewWithDismissProps
> = ({ children, style }) => {
  const height = useHeaderHeight();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={height}
        style={style}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardAvoidingViewWithDismiss;
