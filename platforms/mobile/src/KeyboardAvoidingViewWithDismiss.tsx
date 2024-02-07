import {
  Keyboard,
  KeyboardAvoidingView,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";

type KeyboardAvoidingViewWithDismissProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const KeyboardAvoidingViewWithDismiss: React.FC<
  KeyboardAvoidingViewWithDismissProps
> = ({ children, style }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={110}
        style={style}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardAvoidingViewWithDismiss;
