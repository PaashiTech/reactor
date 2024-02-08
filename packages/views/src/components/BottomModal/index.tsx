import { Dialog } from "tamagui"; // or '@tamagui/dialog'

export const BottomModal = () => (
  <Dialog>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        {/* ... */}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
);
