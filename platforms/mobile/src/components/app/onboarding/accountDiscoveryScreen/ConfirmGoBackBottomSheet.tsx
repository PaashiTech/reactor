import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AccentText,
  BodyText,
  HeadingText,
  OTPCountdownTimer,
  RadioGroup,
  SVGWrapper,
  SecondaryButton,
  ShadowWrapper,
  Spinner,
  UnmzGradientButton,
  View,
  XStack,
  YStack,
  useUserStore,
} from "@unmaze/views";

import React, { Ref, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackRouteProps } from "platforms/mobile/src/navigation/navigators/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RadioItem } from "@unmaze/views/src/components/core/inputs/RadioItem";

type RadioListDataType = {
  id: number;
  value: string;
}[];

const RadioListData: RadioListDataType = [
  {
    id: 1,
    value: "Didn't receive OTP for verification",
  },
  {
    id: 2,
    value: "Unsure about the data security",
  },
  {
    id: 3,
    value: "Other",
  },
];

export const ConfirmGoBackBottomSheet = React.forwardRef<
  BottomSheetModal,
  { canGoBackRef: React.MutableRefObject<Boolean> }
>((props, ref: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackRouteProps>>();

  const snapPoints = useMemo(() => [480, 480], []);

  const [selectedRadio, setSelectedRadio] = useState<string>(
    RadioListData[0].value
  );

  const handleValueChange = (value: string) => {
    setSelectedRadio(value);
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
        }}
      >
        <View
          flex={1}
          paddingHorizontal={20}
          paddingVertical={24}
          justifyContent="space-between"
        >
          <View>
            <YStack gap={4}>
              <HeadingText size="lg">
                Are you sure you don't want to link?
              </HeadingText>
              <AccentText size="sm" color="#6F6F6F">
                You won't be able to access all your investment details or
                benefit from insights on your portfolio.
              </AccentText>
            </YStack>

            <ShadowWrapper size="sm">
              <View
                mt={20}
                borderWidth={1}
                borderColor="#E7E7E7"
                borderRadius={12}
                bg="#fff"
              >
                <AccentText p={12} size="sm" color="#000000">
                  Please let us know why don't you want to link your accounts
                </AccentText>
                <View>
                  <RadioGroup
                    value={selectedRadio}
                    onValueChange={handleValueChange}
                  >
                    {RadioListData.map((item) => (
                      <RadioListItem
                        key={item.id}
                        value={item.value}
                        selected={item.value === selectedRadio}
                        handleValuechange={handleValueChange}
                      />
                    ))}
                  </RadioGroup>
                </View>
              </View>
            </ShadowWrapper>
          </View>
          <View>
            <ShadowWrapper size="sm">
              <View
                p={12}
                borderRadius={12}
                borderWidth={1}
                alignItems="center"
                borderColor="#08BDBA"
                bg="#EBFFFF"
              >
                <AccentText size="xs">
                  20 lakh+ people in India have linked their accounts to
                  accurately track their personal financial data
                </AccentText>
              </View>
            </ShadowWrapper>

            <View mt={20} flexDirection="row" gap={12}>
              <View flex={1} flexGrow={1}>
                <SecondaryButton
                  onPress={() => {
                    ref.current?.close();

                    props.canGoBackRef.current = true;

                    setTimeout(() => {
                      navigation.goBack();
                    }, 300);
                  }}
                >
                  Quit & Go Back
                </SecondaryButton>
              </View>
              <View flex={1} flexGrow={1}>
                <UnmzGradientButton
                  onPress={() => {
                    ref.current?.close();
                  }}
                >
                  Link now
                </UnmzGradientButton>
              </View>
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

type RadioListItemProps = {
  value: string;
  selected: boolean;
  handleValuechange: (value: string) => void;
};

const RadioListItem: React.FC<RadioListItemProps> = ({
  value,
  selected,
  handleValuechange,
}) => {
  return (
    <View
      bg={selected ? "#F4F4F4" : undefined}
      p={12}
      flexDirection="row"
      gap={12}
      onPress={() => handleValuechange(value)}
    >
      <AccentText flexGrow={1}>{value}</AccentText>
      <RadioItem value={value} color="#035E5D" />
    </View>
  );
};
