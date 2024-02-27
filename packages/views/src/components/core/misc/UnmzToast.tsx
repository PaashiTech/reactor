import { Toast, useToastState } from "@tamagui/toast";
import { XStack, YStack } from "tamagui";
import { ToastLogo } from "@unmaze/assets";
import Constants, { ExecutionEnvironment } from "expo-constants";

const isExpo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

const _UnmzToast = () => {
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
      viewportName={currentToast.viewportName}
      backgroundColor={"#393939"}
      width={236}
      paddingHorizontal={16}
      paddingVertical={8}
    >
      <XStack gap={12} alignItems="center">
        <ToastLogo />
        <YStack flex={1}>
          <Toast.Title fontSize={12} color={"#fff"} fontWeight={"500"}>
            {currentToast.title}
          </Toast.Title>

          {!!currentToast.message && (
            <Toast.Description>{currentToast.message}</Toast.Description>
          )}
        </YStack>
      </XStack>
    </Toast>
  );
};

export const UnmzToast: React.FC = () => {
  if (isExpo) {
    return null;
  } else {
    return <_UnmzToast />;
  }
};
