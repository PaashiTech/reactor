import { UnmzNavScreen } from "../types";
import { COMING_SOON_SCREEN_ID, ComingSoonScreenProps } from "./types";
import {
  ScrollView,
  UnmzGradientButton,
  View,
  BodyText,
  ComingSoonBankItem,
  HeadingText,
} from "@unmaze/views";
import {
  AxisBankLogo,
  CanaraBankLogo,
  HDFCBankLogo,
  SbiBankLogo,
  ICICIBankLogo,
  BOBBankLogo,
  SvgProps,
} from "@unmaze/assets";

type ListItemType = {
  id: number;
};

type Bank = ListItemType & {
  title: string;
  logo: React.FC<SvgProps>;
};

const comingSoonBanks = [
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

export const _ComingSoonScreen: React.FC<ComingSoonScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View flex={1} jc="space-between">
      <ScrollView
        flex={1}
        paddingHorizontal={20}
        paddingVertical={24}
        showsVerticalScrollIndicator={false}
      >
        <View gap={2}>
          <HeadingText size="lg">Coming Soon</HeadingText>
          <BodyText size="sm" color="#525252">
            Set up an alert to get notified when your bank starts upporting
            Unmaze
          </BodyText>
        </View>

        <View gap={6} marginTop={24}>
          {comingSoonBanks.map((bank) => (
            <ComingSoonBankItem key={bank.id} bank={bank} />
          ))}
        </View>
      </ScrollView>
      <View paddingHorizontal={20} paddingVertical={16}>
        <UnmzGradientButton onPress={navigation.goBack}>
          Go Back
        </UnmzGradientButton>
      </View>
    </View>
  );
};

export const ComingSoonScreen: UnmzNavScreen = {
  key: COMING_SOON_SCREEN_ID,
  title: "Add Accounts",
  content: _ComingSoonScreen,
};
