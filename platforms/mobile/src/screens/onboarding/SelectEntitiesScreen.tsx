import {
  AccentText,
  BodyText,
  HeadingText,
  Progress,
  ScrollView,
  UnmzGradientButton,
  View,
  YStack,
  useUserStore,
} from "@unmaze/views";
import { SELECT_ENTITIES_SCREEN_ID } from "./types";
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

const _SelectEntitiesScreen = () => {
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
  return (
    <View flex={1} justifyContent="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Progress value={25} height={4} backgroundColor="#EBFFFF">
          <Progress.Indicator
            animation="medium"
            backgroundColor="#08BDBA"
            borderTopRightRadius={2}
            borderBottomRightRadius={2}
          />
        </Progress>
        <View paddingHorizontal={20} paddingVertical={24}>
          <View gap={8}>
            <HeadingText size="lg">Select the financial entities</HeadingText>
            <BodyText color="#6F6F6F">
              Discover and securely connect all FIP accounts linked with{" "}
              <AccentText>+91-{phone.primary}</AccentText>
            </BodyText>
          </View>

          <View marginTop={24} flexDirection="row" gap={16} flexWrap="wrap">
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
        </View>
      </ScrollView>
      <SaafeFooter>
        <YStack gap={12}>
          <BodyText textAlign="center" size="sm" color="#525252">
            Select atleast 1 financial asset to proceed
          </BodyText>
          <UnmzGradientButton disabled={buttonDisabled}>
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
