import React, { useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { AuthoriseBanksSlider } from "./AuthoriseBanksSlider";
import { AuthoriseBanksSuccess } from "./AuthoriseBanksSuccess";
import { accountDiscoveryBankList } from "../constants";

export const AuthoriseBanksBottomSheet = React.forwardRef<BottomSheetModal>(
  (props, ref: any) => {
    const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

    const snapPointValue = accountDiscoveryBankList.length > 1 ? 406 : 360;

    const snapPoints = useMemo(() => [snapPointValue, snapPointValue], []);

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
            <AuthoriseBanksSlider banks={accountDiscoveryBankList} />
          ) : (
            <AuthoriseBanksSuccess bottomSheetRef={ref} />
          )}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);
