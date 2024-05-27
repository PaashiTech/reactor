import {
  BodyText,
  HeadingText,
  UnmzGradientButton,
  View,
  ViewProps,
  XStack,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  AccountDiscoveryScreenProps,
} from "./types";
import { useEffect, useRef, useState } from "react";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { AccountSelectionCard } from "../../components/app/onboarding/accountDiscoveryScreen/AccountSelectionCard";
import {
  accounts,
  investments,
} from "../../components/app/onboarding/constants";
import { CustomHeader } from "../../navigation/helpers/CustomHeader";
import { SharedProgressbar } from "../../components/app/onboarding/shared/SharedProgressbar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AuthoriseBanksBottomSheet } from "../../components/app/onboarding/accountDiscoveryScreen/AuthoriseBanksBottomSheet";
import { FindOutWhyBottomSheet } from "../../components/app/onboarding/accountDiscoveryScreen/FindOutWhyBottomSheet";
import { ConfirmGoBackBottomSheet } from "../../components/app/onboarding/accountDiscoveryScreen/ConfirmGoBackBottomSheet";
import { TopTabs } from "../../components/app/onboarding/accountDiscoveryScreen/TopTabs";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { BanksTab } from "./BanksTab";
import { InvestmentsTab } from "./InvestmentsTab";

const _AccountDiscoveryScreen: React.FC<AccountDiscoveryScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const authoriseBanksBottomSheetRef = useRef<BottomSheetModal>(null);
  const canGoBack = useRef<Boolean>(false);
  const findOutWhyBottomSheetRef = useRef<BottomSheetModal>(null);
  const confirmGoBackBottomSheetRef = useRef<BottomSheetModal>(null);

  const { width } = useWindowDimensions();

  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      authoriseBanksBottomSheetRef.current?.close();
      findOutWhyBottomSheetRef.current?.close();
      if (canGoBack.current) {
        confirmGoBackBottomSheetRef.current?.close();
        return;
      }

      e.preventDefault(); // Prevent default action
      // navigation.navigate(SELECT_BANKS_SCREEN_ID); // Navigate to your desired screen
      confirmGoBackBottomSheetRef.current?.present();
    });

    return unsubscribe;
  }, []);

  const handleAccountSelect = (accountNumber: string) => {
    if (selectedAccounts.includes(accountNumber)) {
      setSelectedAccounts((prev) =>
        prev.filter((item) => item !== accountNumber)
      );
    } else {
      setSelectedAccounts((prev) => [...prev, accountNumber]);
    }
  };

  const handleBottomSheetOpen = () => {
    authoriseBanksBottomSheetRef.current?.present();
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const activeIndex = e.nativeEvent.contentOffset.x / width;
    setSelectedTab(activeIndex);
  };

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    scrollViewRef.current?.scrollTo({ x: index * 360, animated: true });
  };

  return (
    <View flex={1} {...safeAreaInsets}>
      <View flex={1} justifyContent="space-between">
        <View flex={1}>
          <CustomHeader title="Account Discovery" />
          <TopTabs selectedTab={selectedTab} onTabSelect={handleSelectTab} />
          <SharedProgressbar value={60} sharedTransitionTag="sharedTag" />
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
          >
            <BanksTab
              selectedAccounts={selectedAccounts}
              onAccountSelect={handleAccountSelect}
              findOutWhyBottomSheetRef={findOutWhyBottomSheetRef}
            />
            <InvestmentsTab
              selectedAccounts={selectedAccounts}
              onAccountSelect={handleAccountSelect}
              findOutWhyBottomSheetRef={findOutWhyBottomSheetRef}
            />
          </ScrollView>
        </View>
        <SaafeFooter>
          <YStack gap={12}>
            <BodyText textAlign="center" size="sm" color="#525252">
              Connect at least 1 of your banks to proceed
            </BodyText>
            <UnmzGradientButton
              disabled={selectedAccounts.length < 1}
              onPress={handleBottomSheetOpen}
            >
              Link Accounts
            </UnmzGradientButton>
          </YStack>
        </SaafeFooter>
        <AuthoriseBanksBottomSheet ref={authoriseBanksBottomSheetRef} />
        <FindOutWhyBottomSheet ref={findOutWhyBottomSheetRef} />
        <ConfirmGoBackBottomSheet
          ref={confirmGoBackBottomSheetRef}
          canGoBackRef={canGoBack}
        />
      </View>
    </View>
  );
};

export const AccountDiscoveryScreen: UnmzNavScreen = {
  key: ACCOUNT_DISCOVERY_SCREEN_ID,
  title: "Account Discovery",
  content: _AccountDiscoveryScreen,
};
