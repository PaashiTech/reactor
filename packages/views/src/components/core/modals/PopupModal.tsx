import { ReactElement } from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View } from "tamagui";

type PopupModalProps = {
  isVisible: boolean;
  onModalClose: () => void;
  children?: ReactElement;
};

export const PopupModal: React.FC<PopupModalProps> = ({
  isVisible,
  onModalClose,
  children,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onModalClose}
      animationType="fade"
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={onModalClose}
        style={{ flex: 1 }}
      >
        <View
          flex={1}
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0,0,0,0.2)"
        >
          <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
