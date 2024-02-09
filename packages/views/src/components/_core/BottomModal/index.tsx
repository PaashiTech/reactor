import { FC, PropsWithChildren } from "react";
import { Sheet, YStackProps } from "tamagui";
import { DefaultSheetFrameStyles } from "./styles";

type _BottomModalProps = {
  /**
   * Boolean state variable for governing open/close behavior of the component
   */
  open: boolean;

  /**
   * Function that sets the boolean state variable in the parent component with param value
   * (optional if close param is provided)
   * @param isOpen
   * @returns void
   */
  setOpen: (isOpen: boolean) => void;

  /**
   * Styles that can be applied to the modal body
   */
  contentStyle?: YStackProps;

  /**
   * Text to be shown on the close button
   */
  closeButtonText?: string;
};

export type BottomModalProps = PropsWithChildren<_BottomModalProps>;

export const BottomModal: FC<BottomModalProps> = ({
  open,
  setOpen,
  contentStyle = DefaultSheetFrameStyles,
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
      dismissOnOverlayPress
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle unstyled />
      <Sheet.Frame {...contentStyle}>{children}</Sheet.Frame>
    </Sheet>
  );
};
