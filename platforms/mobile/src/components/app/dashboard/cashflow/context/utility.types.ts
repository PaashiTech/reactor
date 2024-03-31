import { SvgProps } from "@unmaze/assets";

export type DurationType = "LAST_30_DAYS" | "MONTHLY";

export type DurationListType = {
  id: number;
  title: string;
  subtitle: string;
  value: DurationType;
}[];

export type BankListItemType = {
  id: number;
  value: string;
  title: string;
  accountNumber: string;
  icon: React.FC<SvgProps>;
};
