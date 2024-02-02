/**
 * @name CoundownTimer
 *
 * @description
 * Coundown Timer for OTP input screen to wait till resend option
 */

import { Text, View } from "tamagui";
import { useCountdown } from "../../hooks/useCountdown";
import { getTime } from "../../helpers/getTime";
import { getFormattedTime } from "../../helpers/getFormattedTime";

type CountdownTimerProps = {
  timerSeconds: number;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timerSeconds,
}) => {
  const { seconds, minutes, isRunning, restart } = useCountdown(
    getTime(timerSeconds)
  );

  const formattedMinutes = getFormattedTime(minutes);
  const formattedSeconds = getFormattedTime(seconds);

  return (
    <View>
      {isRunning ? (
        <Text color="#035E5D">
          {formattedMinutes}:{formattedSeconds}
        </Text>
      ) : (
        <Text
          color="#035E5D"
          pressStyle={{ textDecorationLine: "underline" }}
          onPress={() => restart(getTime(timerSeconds))}
        >
          Resend
        </Text>
      )}
    </View>
  );
};
