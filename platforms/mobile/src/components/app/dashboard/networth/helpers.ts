import { DataType, TabType } from "./types";

export const getFilteredTabs = (data: DataType, tabs: TabType[]): TabType[] => {
  const filteredTabs =
    data.assetsData.length === 0 || data.liabilitiesData.length === 0
      ? tabs.filter((tab) => tab.title !== "Net")
      : tabs;

  return filteredTabs;
};

export const getActiveTab = (filteredTabs: TabType[]) => {
  return filteredTabs.find((tab) => !tab.disabled)?.title!;
};
