import { View } from "@unmaze/views";
import { DashboardHeader } from "../../components/app/dashboard/DashboardHeader";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
} from "react-native";
import { Networth } from "./Networth";
import { Cashflow } from "./Cashflow";
import { useEffect, useState } from "react";
import { FilterBAM } from "../../components/app/dashboard/cashflow/filters/FilterBAM";
import { CashflowContextProvider } from "../../components/app/dashboard/cashflow/context/CashflowContextProvider";
import { UnmzNavScreen } from "../types";
import { ME_DASHBOARD_SCREEN_ID } from "./types";
import {
  TAB_BAR_HEIGHT,
  useScrollContext,
} from "../../navigation/helpers/ScrollContextProvider";

export const _MeDashboardScreen: React.FC = () => {
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);

  const { scrollY, offsetAnim } = useScrollContext();

  let _clampedScrollValue = 0;
  let _offsetValue = 0;
  let _scrollValue = 0;
  let scrollEndTimer: NodeJS.Timeout | null = null;

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      if (value < 0) return;
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue + diff, 0),
        TAB_BAR_HEIGHT
      );
    });

    offsetAnim.addListener(({ value }) => {
      _offsetValue = value;
    });
  }, []);

  const onMomentumScrollBegin = () => {
    if (scrollEndTimer) {
      clearTimeout(scrollEndTimer);
    }
  };
  const onMomentumScrollEnd = () => {
    const toValue =
      _clampedScrollValue > TAB_BAR_HEIGHT / 2
        ? _offsetValue + TAB_BAR_HEIGHT
        : _offsetValue - TAB_BAR_HEIGHT;

    Animated.timing(offsetAnim, {
      toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  const onScrollEndDrag = () => {
    scrollEndTimer = setTimeout(onMomentumScrollEnd, 0);
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
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: true,
            }
          )}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          scrollEventThrottle={1}
          bounces={false}
          style={{ flex: 1 }}
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
