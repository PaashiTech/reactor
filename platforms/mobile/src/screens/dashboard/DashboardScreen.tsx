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
  const lastScrollY = useRef(0);
  const { translateY } = useScrollContext();
  const throttleScroll = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrolling = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < 0) return;
    if (!isScrolling.current) {
      isScrolling.current = true;

      const currentScrollY = event.nativeEvent.contentOffset.y;

      const direction =
        currentScrollY > lastScrollY.current && currentScrollY > 0
          ? "down"
          : "up";

      lastScrollY.current = Math.max(currentScrollY, 0);

      Animated.timing(translateY, {
        toValue: direction === "down" ? 100 : 0,
        useNativeDriver: true,
        duration: 150,
      }).start();

      throttleScroll.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    }
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
        <Animated.ScrollView
          onScroll={onScroll}
          style={{ flex: 1 }}
          bounces={false}
          scrollEventThrottle={16}
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
        </Animated.ScrollView>
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
