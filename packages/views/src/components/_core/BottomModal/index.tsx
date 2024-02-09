import { FC, PropsWithChildren } from "react";
import { Button, Sheet, YStackProps } from "tamagui";
import { DefaultSheetFrameStyles } from "./styles";

export type BottomModalProps = {
  /**
   * Boolean state variable for governing open/close behavior of the component
   */
  open: boolean;

  /**
   * Function that sets the open/close state variable to false (for closing the modal)
   * @returns void
   */
  close: () => void;

  /**
   * Function that sets the boolean state variable in the parent component with param value
   * (optional if close param is provided)
   * @param isOpen
   * @returns void
   */
  setOpen?: (isOpen: boolean) => void;

  /**
   * Styles that can be applied to the modal body
   */
  contentStyle?: YStackProps;

  /**
   * Text to be shown on the close button
   */
  closeButtonText?: string;
};

export const BottomModal: FC<PropsWithChildren<BottomModalProps>> = ({
  open,
  close,
  setOpen,
  contentStyle = DefaultSheetFrameStyles,
  closeButtonText = "Close",
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
      <Sheet.Frame {...contentStyle}>
        {children}
        <Button onPress={close}>{closeButtonText}</Button>
      </Sheet.Frame>
    </Sheet>
  );
};
