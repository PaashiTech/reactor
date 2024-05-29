import {
  CanaraBankLogo,
  SvgProps,
  ICICIBankLogo,
  SbiBankLogo,
  HDFCBankLogo,
} from "@unmaze/assets";

export const accounts = [
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
    ],
  },
  {
    id: 2,
    bankLogo: CanaraBankLogo,
    bankTitle: "Canara Bank",
    accountList: [
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

export const investments = [
  {
    id: 1,
    bankLogo: HDFCBankLogo,
    bankTitle: "NSDL",
    accountList: [
      {
        id: 1,
        accountNumber: "00001178",
        accountType: "Demat Account",
        verified: true,
      },
      {
        id: 2,
        accountNumber: "00004057",
        accountType: "Demat Account",
        verified: true,
      },
    ],
  },
  {
    id: 2,
    bankLogo: HDFCBankLogo,
    bankTitle: "KFintech RTA",
    accountList: [
      {
        id: 1,
        accountNumber: "00004427",
        accountType: "Demat Account",
        verified: false,
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
