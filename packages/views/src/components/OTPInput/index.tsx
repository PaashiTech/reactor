/**
 * @name OTPInput
 *
 * @description
 * Input component to enter the OTP
 */

import { Text, View } from "tamagui";
import OTPTextView from "./OTPTextView";
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
    <View>
      <OTPTextView
        ref={otpRef}
        handleTextChange={handleTextChange}
        inputCount={6}
        tintColor={isError ? "#DA1E28" : "#FDDC69"}
        offTintColor={"#E5E0DF"}
        autoFocus
      />
      {isError && (
        <Text marginTop={16} color="#DA1E28">
          Please enter the correct OTP
        </Text>
      )}
    </View>
  );
};
