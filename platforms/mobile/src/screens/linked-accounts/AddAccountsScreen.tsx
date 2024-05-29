import { SaafeFooter } from "../../components/core/FooterWrapper";
import { UnmzNavScreen } from "../types";
import {
  ADD_ACCOUNTS_SCREEN_ID,
  AddAccountsScreenProps,
  COMING_SOON_SCREEN_ID,
} from "./types";
import { ScrollView, Text, UnmzGradientButton, View } from "@unmaze/views";
import {
  AxisBankLogo,
  CanaraBankLogo,
  HDFCBankLogo,
  SbiBankLogo,
  ICICIBankLogo,
  BOBBankLogo,
  SvgProps,
} from "@unmaze/assets";

import {
  AccentText,
  BankSelect,
  BodyText,
  HeadingText,
  PopularBanksSelect,
} from "@unmaze/views/src/components";
import { useState } from "react";

type ListItemType = {
  id: number;
};

type Bank = ListItemType & {
  title: string;
  logo: React.FC<SvgProps>;
};

const popularBanks = [
  {
    id: 1,
    title: "Axis Bank",
    logo: AxisBankLogo,
  },
  {
    id: 2,
    title: "Canara Bank",
    logo: CanaraBankLogo,
  },
  {
    id: 3,
    title: "State Bank of India",
    logo: SbiBankLogo,
  },
  {
    id: 4,
    title: "ICICI Bank",
    logo: ICICIBankLogo,
  },
  {
    id: 5,
    title: "Bank of Baroda",
    logo: BOBBankLogo,
  },
  {
    id: 6,
    title: "HDFC Bank",
    logo: HDFCBankLogo,
  },
];

const banks: Bank[] = [
  { id: 1, title: "Assam Gramin Vikash Bank", logo: AxisBankLogo },
  { id: 2, title: "AU Bank", logo: AxisBankLogo },
  { id: 3, title: "Bangiya Gramin Vikash Bank", logo: AxisBankLogo },
  { id: 4, title: "Bank of Maharashtra", logo: AxisBankLogo },
  { id: 5, title: "Chaitanya Godavari Grameena Bank", logo: AxisBankLogo },
  { id: 6, title: "City Union Bank", logo: AxisBankLogo },
  { id: 7, title: "Dakshin Bihar Gramin Bank", logo: AxisBankLogo },
  { id: 8, title: "FEDERAL BANK", logo: AxisBankLogo },
  { id: 9, title: "Fincare Small Finance Bank", logo: AxisBankLogo },
  { id: 10, title: "HDFC Bank", logo: AxisBankLogo },
  { id: 11, title: "Himachal Pradesh Gramin Bank", logo: AxisBankLogo },
  { id: 12, title: "ICICI Bank", logo: AxisBankLogo },
  { id: 13, title: "IDBI Bank Ltd.", logo: AxisBankLogo },
  { id: 14, title: "IDFC FIRST BANK", logo: AxisBankLogo },
  { id: 15, title: "Indian Bank", logo: AxisBankLogo },
  { id: 16, title: "Karur Vysya Bank", logo: AxisBankLogo },
  { id: 17, title: "Kotak Mahindra Bank", logo: AxisBankLogo },
  { id: 18, title: "Manipur Rural Bank", logo: AxisBankLogo },
  { id: 19, title: "Prathama UP Gramin Bank", logo: AxisBankLogo },
  { id: 20, title: "Punjab Gramin Bank", logo: AxisBankLogo },
  { id: 21, title: "Punjab National Bank", logo: AxisBankLogo },
  { id: 22, title: "Sarva Haryana Gramin Bank", logo: AxisBankLogo },
  { id: 23, title: "Tripura Gramin Bank", logo: AxisBankLogo },
  { id: 24, title: "UCO Bank", logo: AxisBankLogo },
  { id: 25, title: "Union Bank Of India", logo: AxisBankLogo },
  { id: 26, title: "Yes Bank Ltd", logo: AxisBankLogo },
];

export const _AddAccountsScreen: React.FC<AddAccountsScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);

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
    <View flex={1} jc="space-between">
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 24,
        }}
      >
        <View gap={2}>
          <HeadingText>Popular Banks</HeadingText>
          <BodyText color="#525252">You can select multiple banks</BodyText>
        </View>

        <View marginTop={16} flexDirection="row" gap={12} flexWrap="wrap">
          {popularBanks.map((bank) => {
            return (
              <PopularBanksSelect
                key={bank.id}
                bank={bank}
                handleSelectedBanks={handleSelectedBanks}
                checked={selectedBanks.includes(bank.title)}
              />
            );
          })}
        </View>

        <View marginTop={32}>
          <AccentText>Other Banks</AccentText>
        </View>

        <View gap={8} marginTop={16}>
          {banks.map((bank) => {
            return (
              <BankSelect
                key={bank.id}
                bank={bank}
                handleSelectedBanks={handleSelectedBanks}
                checked={selectedBanks.includes(bank.title)}
              />
            );
          })}
        </View>

        <View marginTop={32} marginBottom={40}>
          <BodyText size="sm" textAlign="center" color="#6F6F6F">
            Couldn't find your bank?{" "}
            <Text
              fontWeight={"700"}
              color={"#035E5D"}
              onPress={() => navigation.navigate(COMING_SOON_SCREEN_ID)}
            >
              Tell us{" "}
            </Text>
            your bank, we will notify you when we start supporting it.
          </BodyText>
        </View>
      </ScrollView>
      <SaafeFooter>
        <View gap={12}>
          <BodyText size="sm" color="#6F6F6F">
            By continuing, you agree to Unmaze's & Saafe's{" "}
            <Text
              textDecorationLine="underline"
              textDecorationColor={"#035E5D"}
              textDecorationDistance={6}
              color={"#035E5D"}
              onPress={() => {
                alert("Show T&C here");
              }}
            >
              T&C
            </Text>
          </BodyText>
          <UnmzGradientButton>Confirm</UnmzGradientButton>
        </View>
      </SaafeFooter>
    </View>
  );
};

export const AddAccountsScreen: UnmzNavScreen = {
  key: ADD_ACCOUNTS_SCREEN_ID,
  title: "Add Accounts",
  content: _AddAccountsScreen,
};
