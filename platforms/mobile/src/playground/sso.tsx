import React, { useState, useCallback, useMemo } from "react";
import { Alert } from "react-native";
import {
  authorize,
  refresh,
  revoke,
  prefetchConfiguration,
} from "react-native-app-auth";
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
  accessToken: "",
  accessTokenExpirationDate: "",
  refreshToken: "",
};

const azureADConfig = {
  issuer:
    "https://unmzapptechpvtltd.b2clogin.com/unmzapptechpvtltd.onmicrosoft.com/B2C_1_signupsignin2/v2.0",
  clientId: "c5d4b052-c4e3-45fb-b30c-5644d8e10fee",
  redirectUrl: "unmz://auth/", // the redirectUrl must end with a slash
  scopes: ["openid"],
};

const AzureADScreen = () => {
  const [authState, setAuthState] = useState(defaultAuthState);
  React.useEffect(() => {
    prefetchConfiguration({
      warmAndPrefetchChrome: true,
      connectionTimeoutSeconds: 5,
      ...azureADConfig,
    });
  }, []);

  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize(azureADConfig);

      console.log("newAuthState is - ");
      console.log(newAuthState);

      setAuthState({
        hasLoggedInOnce: true,
        ...newAuthState,
      });
    } catch (error) {
      Alert.alert("Failed to log in", error.message);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    try {
      const newAuthState = await refresh(azureADConfig, {
        refreshToken: authState.refreshToken,
      });

      setAuthState((current) => ({
        ...current,
        ...newAuthState,
        refreshToken: newAuthState.refreshToken || current.refreshToken,
      }));
    } catch (error) {
      Alert.alert("Failed to refresh token", error.message);
    }
  }, [authState]);

  const handleRevoke = useCallback(async () => {
    try {
      await revoke(azureADConfig, {
        tokenToRevoke: authState.accessToken,
        sendClientId: true,
      });

      setAuthState({
        hasLoggedInOnce: true,
        accessToken: "",
        accessTokenExpirationDate: "",
        refreshToken: "",
      });
    } catch (error) {
      Alert.alert("Failed to revoke token", error.message);
    }
  }, [authState]);

  const showRevoke = useMemo(() => {
    if (authState.accessToken) return false;
  }, [authState]);

  return (
    <View flex={1}>
      {authState.accessToken ? (
        <View>
          <HeadingText>accessToken</HeadingText>
          <BodyText>{authState.accessToken}</BodyText>
          <HeadingText>accessTokenExpirationDate</HeadingText>
          <BodyText>{authState.accessTokenExpirationDate}</BodyText>
          <HeadingText>refreshToken</HeadingText>
          <BodyText>{authState.refreshToken}</BodyText>
          {/* <HeadingText>scopes</HeadingText>
          <BodyText>{authState.scopes.join(", ")}</BodyText> */}
        </View>
      ) : (
        <View flex={1} alignSelf="center" justifyContent="center">
          <HeadingText>
            {authState.hasLoggedInOnce ? "Goodbye." : "Hello, stranger."}
          </HeadingText>
        </View>
      )}

      <View flex={1} alignSelf="center" justifyContent="center" margin={5}>
        {!authState.accessToken ? (
          <>
            <UnmzGradientButton onPress={() => handleAuthorize()}>
              Authorize AzureAD
            </UnmzGradientButton>
          </>
        ) : null}
        {authState.refreshToken ? (
          <SecondaryButton onPress={handleRefresh}>Refresh</SecondaryButton>
        ) : null}
        {showRevoke ? (
          <TertiaryButton onPress={handleRevoke}>Revoke</TertiaryButton>
        ) : null}
      </View>
    </View>
  );
};

export default AzureADScreen;
