export type AccountType = {
  account: any;
};

export type InfoType = {
  type: "info";
};

export type LinkType = {
  type: "link";
};

export type CheckboxType = {
  type: "checkbox";
  checked: boolean;
};

export type RadioType = {
  type: "radio";
  value: string;
  selected: string;
};
