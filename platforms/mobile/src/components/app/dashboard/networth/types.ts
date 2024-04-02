export type TabOptions = "Net" | "Assets" | "Liabilities";

export type TabType = {
  id: number;
  title: TabOptions;
  disabled: boolean;
};

export type CTATextMapType = Record<TabOptions, string>;

export type DataValueType = { value: number };

export type DataType = {
  assetsData: DataValueType[];
  liabilitiesData: DataValueType[];
  netData: DataValueType[];
};
