import {
  CanaraBankLogo,
  SvgProps,
  ICICIBankLogo,
  SbiBankLogo,
} from "@unmaze/assets";

export const Accounts = [
  {
    id: 1,
    bankLogo: ICICIBankLogo,
    bankTitle: "ICICI Bank",
    accountList: [
      {
        id: 1,
        accountNumber: "00001078",
        accountType: "Savings Account",
      },
      {
        id: 2,
        accountNumber: "00007894",
        accountType: "Savings Account",
      },
      {
        id: 3,
        accountNumber: "00005548",
        accountType: "Current Account",
      },
    ],
  },
];

export const accountDiscoveryBankList: {
  bank: {
    bankLogo: React.FC<SvgProps>;
    bankTitle: string;
  };
}[] = [
  {
    bank: {
      bankLogo: CanaraBankLogo,
      bankTitle: "Canara Bank",
    },
  },
  {
    bank: {
      bankLogo: ICICIBankLogo,
      bankTitle: "ICICI Bank",
    },
  },
  {
    bank: {
      bankLogo: SbiBankLogo,
      bankTitle: "SBI Bank",
    },
  },
];
