import { ScrollView, View } from "@unmaze/views";
import { DashboardHeader } from "../../components/app/dashboard/DashboardHeader";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
} from "react-native";
import { Networth } from "./Networth";
import { Cashflow } from "./Cashflow";
import { useEffect, useRef, useState } from "react";
import { FilterBAM } from "../../components/app/dashboard/cashflow/filters/FilterBAM";
import { CashflowContextProvider } from "../../components/app/dashboard/cashflow/context/CashflowContextProvider";

import { UnmzNavScreen } from "../types";
import { ME_DASHBOARD_SCREEN_ID } from "./types";
import { useScrollContext } from "../../navigation/helpers/ScrollContextProvider";

export const _MeDashboardScreen: React.FC = () => {
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);
  const { setScrollDirection } = useScrollContext();
  const lastScrollY = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentPosition = event.nativeEvent.contentOffset.y;
    const direction = currentPosition > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentPosition;
    setScrollDirection(direction);
  };

  return (
    <CashflowContextProvider>
      {/**
       * Remove Status bar and the wrapper react fragment
       * once the screen is used with a navigator.
       *
       * Also remove the bg="FAF9F2" from the main <View> wrapper as
       * it will be taken care by the navigatior.
       */}
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View flex={1}>
        <ScrollView
          flex={1}
          onScroll={handleScroll}
          contentContainerStyle={{
            padding: 20,
            paddingTop: 20 + 24,
            backgroundColor: "#FAF9F2",
          }}
          showsVerticalScrollIndicator={false}
        >
          <DashboardHeader />
          <Networth />
          <Cashflow openFilters={() => setShowFiltersModal(true)} />
        </ScrollView>
        <FilterBAM
          modalVisible={showFiltersModal}
          toggle={setShowFiltersModal}
          close={() => setShowFiltersModal(false)}
        />
      </View>
    </CashflowContextProvider>
  );
};

export const MeDashboardScreen: UnmzNavScreen = {
  key: ME_DASHBOARD_SCREEN_ID,
  title: "Dashboard",
  content: _MeDashboardScreen,
};
