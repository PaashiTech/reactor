export const linkedAccountsData = [
  {
    id: 1,
    name: "HDFC BANK",
    accounts: [
      {
        id: 1,
        type: "Savings",
        accountNumber: "0000004561",
        isLinked: true,
        linkedDateAndTime: new Date(2021, 1, 12, 14, 35),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "Fixed Deposit",
        accountNumber: "0000006789",
        isLinked: false,
        linkedDateAndTime: null,
        amount: null,
      },
      {
        id: 3,
        type: "Credit",
        accountNumber: "0000007812",
        isLinked: true,
        linkedDateAndTime: new Date(2023, 6, 2, 10, 5),
        amount: 1_54_000,
      },
    ],
  },
  {
    id: 2,
    name: "ICICI BANK",
    accounts: [
      {
        id: 1,
        type: "Savings",
        accountNumber: "0000004561",
        isLinked: true,
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "Fixed Deposit",
        isLinked: false,
        accountNumber: "0000007845",
        linkedDateAndTime: null,
        amount: null,
      },
    ],
  },
  {
    id: 3,
    name: "SBI BANK",
    accounts: [
      {
        id: 1,
        type: "Savings",
        accountNumber: "0000004561",
        isLinked: true,
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "Fixed Deposit",
        accountNumber: "0000006789",
        isLinked: true,
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 3,
        type: "Credit",
        isLinked: true,
        accountNumber: "0000007812",
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
    ],
  },
] as const;
