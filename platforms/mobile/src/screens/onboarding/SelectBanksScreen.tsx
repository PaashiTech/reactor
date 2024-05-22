import {
  BodyText,
  AccentText,
  HeadingText,
  ScrollView,
  ShadowWrapper,
  UnmzGradientButton,
  View,
  Input,
  ViewProps,
  YStack,
} from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import { SELECT_BANKS_SCREEN_ID, SelectBanksScreenProps } from "./types";
import { useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SaafeFooter } from "../../components/app/core/FooterWrapper";
import { LinkAccountsBottomSheet } from "../../components/app/onboarding/LinkAccountsBottomSheet";
import { EntityCheckboxHorizontal } from "../../components/app/onboarding/EntityCheckboxHorizontal";
import { BankIcon, Search } from "@unmaze/assets";
import { SharedProgressbar } from "../../components/app/onboarding/SharedProgressbar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomHeader } from "../../navigation/helpers/CustomHeader";

const banksData = [
  {
    title: "Bank 1",
    logo: BankIcon,
  },
  {
    title: "Bank 2",
    logo: BankIcon,
  },
  {
    title: "Bank 3",
    logo: BankIcon,
  },
  {
    title: "Bank 4",
    logo: BankIcon,
  },
  {
    title: "Bank 5",
    logo: BankIcon,
  },
  {
    title: "Bank 6",
    logo: BankIcon,
  },
  {
    title: "Bank 7",
    logo: BankIcon,
  },
  {
    title: "Bank 8",
    logo: BankIcon,
  },
  {
    title: "Bank 9",
    logo: BankIcon,
  },
  {
    title: "Bank 10",
    logo: BankIcon,
  },
];

type FilterBanksInputProps = {
  filterText: string;
  onChangeFilterText: (text: string) => void;
};

const FilterBanksInput: React.FC<FilterBanksInputProps> = ({
  filterText,
  onChangeFilterText,
}) => {
  return (
    <ShadowWrapper size="sm">
      <View
        top={0}
        bottom={0}
        position="absolute"
        justifyContent="center"
        paddingLeft={16}
        zIndex={1}
      >
        <Search width={20} height={20} />
      </View>
      <Input
        paddingLeft={42}
        flex={1}
        onChangeText={onChangeFilterText}
        value={filterText}
        placeholder="Search your banks"
      />
    </ShadowWrapper>
  );
};

const _SelectBanksScreen: React.FC<SelectBanksScreenProps> = ({
  navigation,
  route,
}) => {
  const [filterText, setFilterText] = useState("");
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const insets = useSafeAreaInsets();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.present();
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
        <View flex={1}>
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
                <HeadingText size="lg">
                  Select the banks you hold accounts in.
                </HeadingText>
                <BodyText color="#6F6F6F">
                  You can select multiple banks
                </BodyText>
              </View>

              <FilterBanksInput
                filterText={filterText}
                onChangeFilterText={(filterText) => setFilterText(filterText)}
              />

              <View>
                <AccentText size="md" paddingHorizontal={8}>
                  Popular Banks
                </AccentText>
                <View marginVertical={16} gap={8}>
                  {banksData.map((entity, id) => {
                    return (
                      <EntityCheckboxHorizontal
                        key={id}
                        entity={entity}
                        handleSelectedEntities={handleSelectedBanks}
                        checked={selectedBanks.includes(entity.title)}
                      />
                    );
                  })}
                </View>
              </View>

              <View paddingHorizontal={20}>
                <BodyText>
                  Couldn’t find your bank?
                  <BodyText
                    fontWeight="700"
                    color="#035E5D"
                    onPress={() => navigation.navigate("0210.b.err")}
                  >
                    {" "}
                    Tell us{" "}
                  </BodyText>
                  which one and we’ll notify you when we start supporting it.
                </BodyText>
              </View>
            </View>
          </ScrollView>
        </View>

        <SaafeFooter>
          <YStack gap={12}>
            <BodyText textAlign="center" size="sm" color="#525252">
              Connect at least 1 of your banks to proceed
            </BodyText>
            <UnmzGradientButton
              onPress={handleBottomSheetOpen}
              disabled={selectedBanks.length === 0}
            >
              Continue
            </UnmzGradientButton>
          </YStack>
        </SaafeFooter>
        <LinkAccountsBottomSheet ref={bottomSheetRef} />
      </View>
    </>
  );
};

export const SelectBanksScreen: UnmzNavScreen = {
  key: SELECT_BANKS_SCREEN_ID,
  title: "Link Accounts",
  content: _SelectBanksScreen,
};
