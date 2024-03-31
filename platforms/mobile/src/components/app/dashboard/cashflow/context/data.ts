import {
  SbiBankLogo,
  ICICIBankLogo,
  CanaraBankLogo,
  AxisBankLogo,
  BOBBankLogo,
} from "@unmaze/assets";
import { BankListItemType, DurationListType } from "./utility.types";

export const banksList: BankListItemType[] = [
  {
    id: 1,
    value: "HDFC_BANK",
    title: "HDFC Bank",
    accountNumber: "1234567894567",
    icon: ICICIBankLogo,
  },
  {
    id: 2,
    value: "CANARA_BANK",
    title: "Canara Bank",
    accountNumber: "1234567894567",
    icon: CanaraBankLogo,
  },
  {
    id: 3,
    value: "AXIS_BANK",
    title: "Axis Bank",
    accountNumber: "1234567894567",
    icon: AxisBankLogo,
  },
  {
    id: 4,
    value: "SBI_BANK",
    title: "SBI Bank",
    accountNumber: "1234567894567",
    icon: SbiBankLogo,
  },
  {
    id: 5,
    value: "BOB_BANK",
    title: "BOB Bank",
    accountNumber: "1234567894567",
    icon: BOBBankLogo,
  },
];

export const durationInputList: DurationListType = [
  {
    id: 1,
    title: "Last 30 days",
    subtitle: "24 Dec 24' - Today",
    value: "LAST_30_DAYS",
  },
  {
    id: 2,
    title: "Montly",
    subtitle: "1 Jan 24' - 31 Jan 24'",
    value: "MONTHLY",
  },
];
