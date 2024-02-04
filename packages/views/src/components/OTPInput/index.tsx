/**
 * @name OTPInput
 *
 * @description
 * Input component to enter the OTP
 */

import { Text, View, XStack } from "tamagui";
import OTPTextView from "./OTPTextView";
import { CountdownTimer } from "../CountdownTimer";
import React, { LegacyRef } from "react";

type OTPInputProps = {
  handleTextChange: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  otpRef: LegacyRef<OTPTextView>;
};

export const OTPInput: React.FC<OTPInputProps> = ({
  handleTextChange,
  isError,
  otpRef,
}) => {
  return (
    <View gap={20}>
      <View>
        <OTPTextView
          ref={otpRef}
          handleTextChange={handleTextChange}
          inputCount={6}
          tintColor={isError ? "#DA1E28" : "#FDDC69"}
          offTintColor={"#E5E0DF"}
        />
        {isError && (
          <Text marginTop={16} color="#DA1E28">
            Please enter the correct OTP
          </Text>
        )}
      </View>
      <XStack gap={4}>
        <Text color={"#6F6F6F"}>Didn't receive the OTP?</Text>
        <CountdownTimer timerSeconds={60} />
      </XStack>
    </View>
  );
};
