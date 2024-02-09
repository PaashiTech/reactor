import { BottomModal, Text, UnmzGradientButton, View } from "@unmaze/views";
import { useState } from "react";

export const ModalTest1 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <UnmzGradientButton
        onPress={() => {
          setModalOpen(true);
        }}
      >
        Open modal
      </UnmzGradientButton>
      <BottomModal
        open={modalOpen}
        close={() => {
          setModalOpen(false);
        }}
      >
        <Text>Hello</Text>
      </BottomModal>
    </View>
  );
};
