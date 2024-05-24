import {
  AccentText,
  BodyText,
  OTPCountdownTimer,
  SVGWrapper,
  Spinner,
  View,
  XStack,
} from "@unmaze/views";
import { useEffect, useState } from "react";
import { Keyboard, useWindowDimensions } from "react-native";
import { OTPInputBottomSheet } from "../shared/OTPInputBottomSheet";
import { SvgProps, Verified } from "@unmaze/assets";

const fakeApiCall = (
  success: boolean
): Promise<{ status: number; message: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          message: "Success",
        });
      } else {
        reject({
          status: 404,
          message: "Not found",
        });
      }
    }, 3000);
  });
};

type AuthoriseBanksSliderItemProps = {
  bank: {
    bankLogo: React.FC<SvgProps>;
    bankTitle: string;
  };
  mobileNumber: string;
};

export const AuthoriseBanksSliderItem: React.FC<
  AuthoriseBanksSliderItemProps
> = ({ bank: { bankLogo, bankTitle }, mobileNumber }) => {
  const [code, setCode] = useState<string>("");
  const [isSubmitting, setIsSubitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const handleCode = (textValue: string) => {
    // replace any non-numeric input with an empty string
    if (isSubmitting) return;
    const newValue = textValue.replace(/[^0-9]/g, "");
    setCode(newValue);
  };

  useEffect(() => {
    if (code.length !== 6) {
      return;
    }
    let id;
    setIsSuccess(false);
    setIsError(false);
    const fetchData = async () => {
      // Make API Call
      console.log("API Call");
      setIsSubitting(true);
      Keyboard.dismiss();
      try {
        const data = await fakeApiCall(true);
        setIsSubitting(false);
        setIsSuccess(true);

        // id = setTimeout(() => {
        //   setIsAuthorised(true);
        // }, 1000);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsSubitting(false);
      }
    };

    fetchData(); // Call the async function inside useEffect

    return () => clearTimeout(id);
  }, [code]);

  return (
    <View width={width - 20 * 2}>
      <View mt={24}>
        <XStack gap={8}>
          <SVGWrapper iconSVG={bankLogo} size="md" />
          <AccentText>{bankTitle}</AccentText>
        </XStack>
        <BodyText mt={8} size="sm" color="#6F6F6F">
          The OTP will be sent to{" "}
          <AccentText size="sm" color="#262626">
            +91-{mobileNumber}
          </AccentText>
        </BodyText>
      </View>

      <View mt={24}>
        <OTPInputBottomSheet
          code={code}
          handleCode={handleCode}
          isError={isError}
          isSubmitting={isSubmitting}
          isSuccess={isSuccess}
        />
        {!isSubmitting && !isSuccess && (
          <XStack mt={24} gap={4}>
            <BodyText color="#6F6F6F">Didn't receive the OTP?</BodyText>
            <OTPCountdownTimer timerSeconds={60} onResendPress={() => {}} />
          </XStack>
        )}

        {isSubmitting && (
          <XStack mt={24} gap={8}>
            <Spinner size="small" color="#D9D9D9" />
            <AccentText size="md" color="#6F6F6F">
              Verifying
            </AccentText>
          </XStack>
        )}

        {isSuccess && (
          <XStack mt={24} gap={8}>
            <Verified />
            <AccentText size="md" color="#198038">
              Verified successfully
            </AccentText>
          </XStack>
        )}
      </View>
    </View>
  );
};
