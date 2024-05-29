import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Input, Text, View, VisuallyHidden } from "tamagui";
import { BodyText } from "../typography/BodyText";
import { IconButton } from "../buttons/IconButton";
import { EyeHidden, EyeVisible } from "@unmaze/assets";

type UnmazePinInputProps = {
  code: string;
  setCode: (value: string) => void;
  setError?: (value: boolean) => void;
  label: string;
  showDigits: boolean;
  isError?: boolean;
  isConfirmPin?: boolean;
};

export const UnmazePinInput: React.FC<UnmazePinInputProps> = ({
  code,
  setCode,
  setError,
  label,
  showDigits,
  isError,
  isConfirmPin = false,
}) => {
  //monitoring input focus
  const [inputContainerIsFocused, setInputContainerIsFocused] =
    useState<boolean>(false);

  const [isPinVisible, setIsPinVisible] = useState<boolean>(false);

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
  const PIN_MAX_LENGTH = 4;

  const codeDigitsArray = new Array(PIN_MAX_LENGTH).fill(0);

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
    const digit =
      (code[index] && showDigits) || isPinVisible
        ? code[index]
        : code[index]
        ? "•"
        : "";

    // formatting
    const isCurrentDigit = index <= code.length - 1;

    return (
      <View
        key={index}
        borderColor={
          isError && isConfirmPin
            ? "#DA1E28"
            : isCurrentDigit
            ? "#FDDC69"
            : "#C6C6C6"
        }
        width={40}
        height={40}
        alignItems="center"
        justifyContent="center"
        borderBottomWidth={inputContainerIsFocused ? 2 : 1}
      >
        <Text
          fontSize={showDigits || isPinVisible ? 14 : 20}
          textAlign="center"
          color={"black"}
        >
          {digit}
        </Text>
      </View>
    );
  };

  const handleCode = (value: string) => {
    // replace any non-numeric input with an empty string
    const newValue = value.replace(/[^0-9]/g, "");
    setCode(newValue);
    if (setError) {
      setError(false);
    }
  };

  return (
    <View onPress={handleOnBlur}>
      <BodyText marginBottom={8}>{label}</BodyText>

      <View
        onPress={handleOnPress}
        flexDirection="row"
        alignItems="center"
        gap={16}
      >
        {codeDigitsArray.map(toCodeDigitInput)}
        {!isConfirmPin && (
          <View marginLeft="auto">
            <IconButton
              icon={isPinVisible ? EyeVisible : EyeHidden}
              onPress={() => setIsPinVisible((prev) => !prev)}
            />
          </View>
        )}
      </View>
      {isError && isConfirmPin && (
        <BodyText marginTop={16} color="#DA1E28">
          Entered PIN doesn't match
        </BodyText>
      )}
      <VisuallyHidden>
        <Input
          ref={textInputRef}
          maxLength={PIN_MAX_LENGTH}
          value={code}
          onChangeText={handleCode}
          onBlur={handleOnBlur}
          borderColor={"gray"}
          focusStyle={{ borderColor: "gray" }}
          keyboardType="numeric"
          returnKeyType="done"
          textContentType="oneTimeCode"
        />
      </VisuallyHidden>
    </View>
  );
};
