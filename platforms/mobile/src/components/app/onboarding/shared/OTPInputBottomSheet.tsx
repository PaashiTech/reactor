import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Input, Text, View, VisuallyHidden } from "tamagui";

type OTPInputBottomSheetProps = {
  code: string;
  handleCode: (value: string) => void;
  isError: boolean;
  isSuccess: boolean;
  isSubmitting: boolean;
};

export const OTPInputBottomSheet: React.FC<OTPInputBottomSheetProps> = ({
  code,
  handleCode,
  isError,
  isSubmitting,
  isSuccess,
}) => {
  //monitoring input focus
  const [inputContainerIsFocused, setInputContainerIsFocused] =
    useState<boolean>(true);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Handle the manual dismissal of the keyboard here
        textInputRef.current?.blur();
      }
    );

    // Cleanup the listener when the component is unmounted
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  // Number of OTP input fields
  const OTP_MAX_LENGTH = 6;

  const codeDigitsArray = new Array(OTP_MAX_LENGTH).fill(0);

  // ref for text input
  const textInputRef = useRef<Input>(null);

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  const toCodeDigitInput = (_, index: number) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    // formatting
    const isCurrentDigit = index <= code.length - 1;

    return (
      <View
        key={index}
        borderColor={
          isError
            ? "#DA1E28"
            : isSubmitting
            ? "#E7E7E7"
            : isSuccess
            ? "#198038"
            : isCurrentDigit
            ? "#FDDC69"
            : "#C6C6C6"
        }
        width={40}
        height={40}
        alignItems="center"
        justifyContent="center"
        borderBottomWidth={1}
      >
        <Text
          fontSize={16}
          textAlign="center"
          color={isSubmitting ? "#ADA8A8" : "#262626"}
        >
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <View onPress={handleOnBlur}>
      <View
        onPress={handleOnPress}
        alignSelf="center"
        flexDirection="row"
        width={"100%"}
        justifyContent="space-between"
      >
        {codeDigitsArray.map(toCodeDigitInput)}
      </View>
      {isError && (
        <Text marginTop={16} color="#DA1E28">
          Please enter the correct OTP
        </Text>
      )}
      <VisuallyHidden>
        <BottomSheetTextInput
          ref={textInputRef}
          maxLength={OTP_MAX_LENGTH}
          value={code}
          onChangeText={handleCode}
          onBlur={handleOnBlur}
          keyboardType="numeric"
        />
      </VisuallyHidden>
    </View>
  );
};
