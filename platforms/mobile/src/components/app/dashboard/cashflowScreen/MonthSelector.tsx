import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft2,
  Close,
  Check3,
} from "@unmaze/assets";
import { unmzBaseColors } from "@unmaze/config/src/unmaze-design-system/unmzDesignSystem";
import {
  View,
  XStack,
  SVGWrapper,
  IconButton,
  AccentText,
  HeadingText,
  BodyText,
} from "@unmaze/views";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Pressable } from "react-native";
import { getMonthYearList } from "./cashflowData";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";

type MonthSelectorProps = {};

export const MonthSelector: React.FC<MonthSelectorProps> = ({}) => {
  const {
    state: { selectedMonthYear },
    dispatch,
  } = useCashflowScreenContext();

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetFlatListRef = useRef<BottomSheetFlatListMethods>(null);

  // variables
  const snapPoints = useMemo(() => ["60%", "60%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss({ duration: 250 });
  }, []);

  const monthYearList = getMonthYearList();

  const canGoPrevious =
    monthYearList.indexOf(selectedMonthYear) !== monthYearList.length - 1;

  const canGoNext = monthYearList.indexOf(selectedMonthYear) !== 0;

  const handleMonthYearSelect = (monthYear: string) => {
    dispatch({ type: "SELECT_MONTH_YEAR", payload: { monthYear: monthYear } });
    handleCloseModalPress();
  };

  const handleNextMonthYearSelect = () => {
    const selectedMonthYearIndex = monthYearList.indexOf(selectedMonthYear);
    const previousMonthYearIndex = Math.max(0, selectedMonthYearIndex - 1);
    const previousMonthYear = monthYearList[previousMonthYearIndex];
    dispatch({
      type: "SELECT_MONTH_YEAR",
      payload: { monthYear: previousMonthYear },
    });
  };

  const handlePreviousMonthYearSelect = () => {
    const selectedMonthYearIndex = monthYearList.indexOf(selectedMonthYear);
    const previousMonthYearIndex = Math.min(
      monthYearList.length - 1,
      selectedMonthYearIndex + 1
    );
    const previousMonthYear = monthYearList[previousMonthYearIndex];
    dispatch({
      type: "SELECT_MONTH_YEAR",
      payload: { monthYear: previousMonthYear },
    });
  };

  useEffect(() => {
    const selectedIndex = monthYearList.indexOf(selectedMonthYear);
    bottomSheetFlatListRef.current?.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewOffset: 10,
    });
  }, [selectedMonthYear]);

  return (
    <>
      <View
        bg="#FFF"
        paddingHorizontal="$5"
        paddingVertical="$2"
        alignItems="center"
        flexDirection="row"
      >
        <View>
          <IconButton
            disabled={!canGoPrevious}
            icon={() => (
              <SVGWrapper
                iconSVG={ChevronLeft2}
                svgColor={canGoPrevious ? "#393939" : "#697077"}
                size="md"
              />
            )}
            onPress={handlePreviousMonthYearSelect}
          />
        </View>

        <View flexGrow={1} justifyContent="center" alignItems="center">
          <View borderRadius={20}>
            <Pressable
              android_ripple={{ borderless: true }}
              onPress={handlePresentModalPress}
            >
              <XStack alignItems="center" gap={6} p={4}>
                <AccentText>{selectedMonthYear}</AccentText>
                <SVGWrapper
                  iconSVG={ChevronDown}
                  svgColor={unmzBaseColors["unmaze/Teal"]}
                  size="md"
                />
              </XStack>
            </Pressable>
          </View>
        </View>
        <View>
          <IconButton
            disabled={!canGoNext}
            icon={() => (
              <SVGWrapper
                iconSVG={ChevronRight}
                size="md"
                svgColor={canGoNext ? "#393939" : "#697077"}
              />
            )}
            onPress={handleNextMonthYearSelect}
          />
        </View>
      </View>
      <BottomSheetModal
        enableContentPanningGesture={false}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        handleComponent={null}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView
          style={{ flex: 1, paddingVertical: 24, paddingHorizontal: 16 }}
        >
          <XStack justifyContent="space-between">
            <HeadingText size="lg">Select Month</HeadingText>
            <IconButton icon={Close} onPress={handleCloseModalPress} />
          </XStack>

          <BottomSheetFlatList
            data={monthYearList}
            renderItem={({ item }) => (
              <MonthListItem
                month={item}
                selected={selectedMonthYear === item}
                onSelect={() => handleMonthYearSelect(item)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ref={bottomSheetFlatListRef}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 12 }}
            contentContainerStyle={{ paddingBottom: 12 }}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

type MonthListItemProp = {
  month: string;
  selected: boolean;
  onSelect: () => void;
};

const MonthListItem: React.FC<MonthListItemProp> = ({
  month,
  selected,
  onSelect,
}) => {
  return (
    <Pressable onPress={onSelect}>
      <View
        paddingHorizontal="$3"
        paddingVertical="$2"
        bg={selected ? "$background/background_selected" : null}
        flexDirection="row"
        justifyContent="space-between"
        borderRadius="$2"
      >
        <BodyText fontWeight={selected ? "$5" : "$4"}>{month}</BodyText>
        {selected && <Check3 />}
      </View>
    </Pressable>
  );
};
