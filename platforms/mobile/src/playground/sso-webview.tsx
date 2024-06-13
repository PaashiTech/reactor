import React, { useState, useCallback, useMemo } from "react";
import { Alert } from "react-native";
import { WebView } from "react-native-webview";
import {
  UnmzGradientButton,
  HeadingText,
  BodyText,
  View,
  SecondaryButton,
  TertiaryButton,
} from "@unmaze/views";

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: "",
  accessToken: "",
  accessTokenExpirationDate: "",
  refreshToken: "",
};

const AzureADScreenWebview = () => {
  // const [webviewOpen, setWebviewOpen] = useState(false);
  // const [authState, setAuthState] = useState(defaultAuthState);

  return (
    // <View flex={1}>
    <WebView
      style={{ flex: 1 }}
      source={{
        uri: "https://unmzapptechpvtltd.b2clogin.com/unmzapptechpvtltd.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsignin2&client_id=c5d4b052-c4e3-45fb-b30c-5644d8e10fee&nonce=1234&redirect_uri=https://jwt.ms&scope=https://unmzapptechpvtltd.onmicrosoft.com/c5d4b052-c4e3-45fb-b30c-5644d8e10fee/openid&response_type=token&prompt=login",
      }}
    />
    // </View>
  );
};

export default AzureADScreenWebview;
