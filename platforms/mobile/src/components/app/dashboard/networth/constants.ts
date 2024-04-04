import { data } from "./data";
import { CTATextMapType, TabType } from "./types";

export const CTATextMAP: CTATextMapType = {
  Net: "View Balance Sheet",
  Assets: "View Assets",
  Liabilities: "View Liabilities",
};

export const tabs: TabType[] = [
  {
    id: 1,
    title: "Net",
    disabled: data.netData.length === 0,
  },
  {
    id: 2,
    title: "Assets",
    disabled: data.assetsData.length === 0,
  },
  {
    id: 3,
    title: "Liabilities",
    disabled: data.liabilitiesData.length === 0,
  },
];
