import {
  getHash,
  startOtpListener,
  removeListener,
  addListener,
  // useOtpVerify,
} from "react-native-otp-verify";

import { View, Text } from "@unmaze/views";
import { useState, useEffect } from "react";

export const OTPListenTest = () => {
  // const {  } = useOtpVerify({ numberOfDigits: 6 });
  const [hash, setHash] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const _otp_handler = (msg) => {
    // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
    const _otp = /(\d{6})/g.exec(msg) ? /(\d{6})/g.exec(msg)![1] : "";
    setOtp(_otp);

    addListener(_otp_handler);
  };

  useEffect(() => {
    getHash()
      .then((hash) => {
        // use this hash in the message.
        setHash(hash[0]);
      })
      .catch(console.log);

    startOtpListener(_otp_handler);

    return () => removeListener();
  }, []);

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text>App Hash : {hash}</Text>
      <Text>OTP Received : {otp}</Text>
    </View>
  );
};
