import { FC, PropsWithChildren } from "react";
import { Button, Sheet } from "tamagui"; // or '@tamagui/sheet'

export type BottomModalProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

export const BottomModal: FC<PropsWithChildren<BottomModalProps>> = ({
  open,
  setOpen,
  children,
}) => {
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
      modal={true}
      snapPointsMode="fit"
      zIndex={100_000}
      animation="lazy"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle unstyled />
      <Sheet.Frame
        flex={1}
        flexDirection="column"
        padding={10}
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        {children}
        <Button
          onPress={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>
      </Sheet.Frame>
    </Sheet>
  );
};
