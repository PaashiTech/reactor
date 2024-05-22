import {
  AccentText,
  BodyText,
  HeadingText,
  ScrollView,
  UnmzGradientButton,
  View,
  YStack,
  useUserStore,
} from "@unmaze/views";
import {
  SELECT_BANKS_SCREEN_ID,
  SELECT_ENTITIES_SCREEN_ID,
  SelectEntitiesScreenProps,
} from "./types";
import { UnmzNavScreen } from "../types";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import {
  BankIcon,
  BOBBankLogo,
  CanaraBankLogo,
  HDFCBankLogo,
  SbiBankLogo,
} from "@unmaze/assets";
import { useState } from "react";
import { EntityCheckbox } from "../../components/app/onboarding/EntityCheckbox";
import { SharedProgressbar } from "../../components/app/onboarding/SharedProgressbar";

const entitiesData = [
  {
    id: 1,
    title: "Bank Account",
    logo: BankIcon,
  },
  {
    id: 2,
    title: "Mutual Funds",
    logo: CanaraBankLogo,
  },
  {
    id: 3,
    title: "Stocks",
    logo: SbiBankLogo,
  },

  {
    id: 4,
    title: "NPS",
    logo: BOBBankLogo,
  },
  {
    id: 5,
    title: "Insurance",
    logo: HDFCBankLogo,
  },
];

const _SelectEntitiesScreen: React.FC<SelectEntitiesScreenProps> = ({
  navigation,
  route,
}) => {
  const { phone } = useUserStore();

  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);

  const buttonDisabled = selectedBanks.length === 0;

  const handleSelectedBanks = (bankTitle: string) => {
    if (!selectedBanks.includes(bankTitle)) {
      setSelectedBanks((selectedBanks) => [...selectedBanks, bankTitle]);
    } else {
      setSelectedBanks((selectedBanks) =>
        selectedBanks.filter((selectedBank) => selectedBank !== bankTitle)
      );
    }
  };

  const handlePress = () => {
    // Navigate to Select Banks Screen
    navigation.navigate(SELECT_BANKS_SCREEN_ID);
  };

  return (
    <View flex={1} justifyContent="space-between">
      <View flex={1}>
        <SharedProgressbar value={25} sharedTransitionTag="sharedTag" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View gap={2} mt={20} paddingHorizontal={20}>
            <HeadingText size="lg">Select the financial entities</HeadingText>
            <BodyText color="#6F6F6F">
              Discover and securely connect all FIP accounts linked with{" "}
              <AccentText>+91-{phone.primary}</AccentText>
            </BodyText>
          </View>

          <View
            marginVertical={24}
            paddingHorizontal={20}
            flexDirection="row"
            gap={16}
            flexWrap="wrap"
          >
            {entitiesData.map((entity) => {
              return (
                <EntityCheckbox
                  key={entity.id}
                  entity={entity}
                  handleSelectedBanks={handleSelectedBanks}
                  checked={selectedBanks.includes(entity.title)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <SaafeFooter>
        <YStack gap={12}>
          <BodyText textAlign="center" size="sm" color="#525252">
            Select atleast 1 financial asset to proceed
          </BodyText>
          <UnmzGradientButton disabled={buttonDisabled} onPress={handlePress}>
            Discover Accounts
          </UnmzGradientButton>
        </YStack>
      </SaafeFooter>
    </View>
  );
};

export const SelectEntitiesScreen: UnmzNavScreen = {
  key: SELECT_ENTITIES_SCREEN_ID,
  title: "Link Accounts",
  content: _SelectEntitiesScreen,
};
