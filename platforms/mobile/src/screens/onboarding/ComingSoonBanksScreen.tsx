import {
  BodyText,
  HeadingText,
  ScrollView,
  ToastViewport,
  UnmzGradientButton,
  UnmzToast,
  View,
  ViewProps,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  COMING_SOON_BANKS_SCREEN_ID,
  ComingSoonBanksScreenProps,
} from "./types";
import { useState } from "react";
import {
  AxisBankLogo,
  BOBBankLogo,
  BankOfIndiaLogo,
  CanaraBankLogo,
  CityUnionBankLogo,
  HSBCBankLogo,
  IndianOverseasBankLogo,
  IndusIndBankLogo,
  KarnatakaBankLogo,
  PunjabAndSindBankLogo,
  SbiBankLogo,
  SouthIndianBankLogo,
} from "@unmaze/assets";
import { SharedProgressbar } from "../../components/app/onboarding/SharedProgressbar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomHeader } from "../../navigation/helpers/CustomHeader";

import { ComingSoonBankItem } from "@unmaze/views";

const banksData = [
  {
    title: "Axis Bank",
    logo: AxisBankLogo,
  },
  {
    title: "Bank of Baroda",
    logo: BOBBankLogo,
  },
  {
    title: "Bank of India",
    logo: BankOfIndiaLogo,
  },
  {
    title: "Canara Bank",
    logo: CanaraBankLogo,
  },
  {
    title: "City Union Bank",
    logo: CityUnionBankLogo,
  },
  {
    title: "HSBC Bank",
    logo: HSBCBankLogo,
  },
  {
    title: "Indian Overseas Bank",
    logo: IndianOverseasBankLogo,
  },
  {
    title: "IndusInd Bank",
    logo: IndusIndBankLogo,
  },
  {
    title: "Karnataka Bank",
    logo: KarnatakaBankLogo,
  },
  {
    title: "Punjab & Sind Bank",
    logo: PunjabAndSindBankLogo,
  },
  {
    title: "State Bank of India",
    logo: SbiBankLogo,
  },
  {
    title: "Soute Indian Bank",
    logo: SouthIndianBankLogo,
  },
];

const _ComingSoonBanksScreen: React.FC<ComingSoonBanksScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const handleSelectedBanks = (bankTitle: string) => {
    if (!selectedBanks.includes(bankTitle)) {
      setSelectedBanks((selectedBanks) => [...selectedBanks, bankTitle]);
    } else {
      setSelectedBanks((selectedBanks) =>
        selectedBanks.filter((selectedBank) => selectedBank !== bankTitle)
      );
    }
  };

  return (
    <>
      <View flex={1} {...safeAreaInsets} justifyContent="space-between">
        <CustomHeader title="Link Accounts" />
        <SharedProgressbar value={40} sharedTransitionTag="sharedTag" />
        <ScrollView
          flex={1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View flex={1} gap={24}>
            <View gap={2}>
              <HeadingText size="lg">Coming soon</HeadingText>
              <BodyText color="#525252">
                Set up an alert to get notified when your bank starts supporting
                Unmaze
              </BodyText>
            </View>

            <View gap={6}>
              {banksData.map((entity, id) => {
                return (
                  <ComingSoonBankItem
                    key={id}
                    bank={{ id: id, title: entity.title, logo: entity.logo }}
                    showNotifyToast={true}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>

        {/* Toast and "Go back" CTA */}
        <UnmzToast />
        <ToastViewport left={0} right={0} bottom={80} />

        <UnmzGradientButton
          marginVertical={16}
          marginHorizontal={20}
          onPress={navigation.goBack}
        >
          Got it!
        </UnmzGradientButton>
      </View>
    </>
  );
};

export const ComingSoonBanksScreen: UnmzNavScreen = {
  key: COMING_SOON_BANKS_SCREEN_ID,
  title: "Link Accounts",
  content: _ComingSoonBanksScreen,
};
