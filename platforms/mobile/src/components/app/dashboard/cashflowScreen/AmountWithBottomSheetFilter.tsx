import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  HeadingText,
  XStack,
  IconButton,
  BodyText,
  Separator,
} from "@unmaze/views";
import { Close, Filter } from "@unmaze/assets";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type AmountWithBottomSheetFilterProps = {};

export const AmountWithBottomSheetFilter: React.FC<
  AmountWithBottomSheetFilterProps
> = ({}) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["70%", "70%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss({ duration: 250 });
  }, []);

  return (
    <View bg="#fff" paddingTop="$3" paddingHorizontal="$5">
      <XStack alignItems="center" justifyContent="space-between">
        <HeadingText size="xl">₹45,890.65</HeadingText>
        <IconButton icon={Filter} onPress={handlePresentModalPress} />
      </XStack>
      <BodyText mt="$1" size="sm" color="$text/on-secondary/text_subdued">
        All bank accounts
      </BodyText>
      <Separator mt="$3" />
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
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 12, paddingBottom: 24 }}
          >
            <Text paddingVertical={20}>Hello</Text>
            <Text paddingVertical={20}>Hello</Text>
            <Text paddingVertical={20}>Hello</Text>
            <Text paddingVertical={20}>Hello</Text>
          </BottomSheetScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};
