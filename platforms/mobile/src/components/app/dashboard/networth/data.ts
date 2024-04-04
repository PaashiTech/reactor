import { DataType, DataValueType } from "./types";

const assetsData: DataValueType[] = [
  {
    value: 4,
  },
  {
    value: 4,
  },
  {
    value: 5.5,
  },
  {
    value: 6.5,
  },
  {
    value: 9.5,
  },
  {
    value: 7.5,
  },
];

// const assetsData = [];

const liabilitiesData: DataValueType[] = [
  {
    value: 2.4,
  },
  {
    value: 1.5,
  },
  {
    value: 2,
  },
  {
    value: 1,
  },
  {
    value: 1.5,
  },
  {
    value: 2,
  },
];

// const liabilitiesData = [];

const netData: DataValueType[] = [
  {
    value: 1.5,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 5,
  },
  {
    value: 7,
  },

  {
    value: 10,
  },
];

export const data: DataType = {
  assetsData,
  liabilitiesData,
  netData,
};
