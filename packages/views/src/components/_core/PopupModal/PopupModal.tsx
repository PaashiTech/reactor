import { ReactElement } from "react";
import { Modal } from "react-native";
import { View, ViewProps } from "tamagui";

interface PopupModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
}

export const PopupModal: React.FC<PopupModalProps> = ({
  isVisible,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onRequestClose}
      animationType="fade"
    >
      <View
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,0,0,0.2)"
      >
        {children}
      </View>
    </Modal>
  );
};
