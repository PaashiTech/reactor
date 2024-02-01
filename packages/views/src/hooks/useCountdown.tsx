import { useTimer } from "react-timer-hook";

export const useCountdown = (expiryTimestamp: Date, onExpire?: () => void) => {
  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: onExpire,
  });
  return { seconds, minutes, isRunning, restart };
};
