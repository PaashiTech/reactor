import React, { useEffect, useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { AuthoriseBanksSlider } from "./AuthoriseBanksSlider";
import { AuthoriseBanksSuccess } from "./AuthoriseBanksSuccess";
import { accountDiscoveryBankList } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingStackRouteProps } from "../../../../navigation/navigators/types";

export const AuthoriseBanksBottomSheet = React.forwardRef<BottomSheetModal>(
  (props, ref: any) => {
    const [banks, setBanks] = useState(
      accountDiscoveryBankList.map((item) => ({ ...item, verified: false }))
    );
    const navigation =
      useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();

    const snapPointValue = accountDiscoveryBankList.length > 1 ? 406 : 360;

    const snapPoints = useMemo(() => [snapPointValue, snapPointValue], []);

    const isAuthorised = banks.every((item) => item.verified);

    const handleAuthorise = (title: string) => {
      setBanks((banks) =>
        banks.map((item) =>
          item.bank.bankTitle === title ? { ...item, verified: true } : item
        )
      );
    };

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleComponent={null}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="none"
          />
        )}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <BottomSheetView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 12,
          }}
        >
          {!isAuthorised ? (
            <AuthoriseBanksSlider
              banks={accountDiscoveryBankList}
              handleAuthorise={handleAuthorise}
            />
          ) : (
            <AuthoriseBanksSuccess
              bottomSheetRef={ref}
              navigation={navigation}
            />
          )}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);
