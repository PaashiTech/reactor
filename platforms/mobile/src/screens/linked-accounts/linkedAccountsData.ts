export const linkedAccountsData = [
  {
    id: 1,
    name: "HDFC BANK",
    accounts: [
      {
        id: 1,
        type: "Savings",
        accountNumber: "0000004561",
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "Fixed Deposit",
        accountNumber: "0000006789",
        linkedDateAndTime: null,
        amount: null,
      },
      {
        id: 3,
        type: "Credit",
        accountNumber: "0000007812",
        linkedDateAndTime: new Date(),
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
        type: "savings",
        accountNumber: "0000004561",
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "fixedDeposit",
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
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
      {
        id: 2,
        type: "Fixed Deposit",
        accountNumber: "0000006789",
        linkedDateAndTime: null,
        amount: null,
      },
      {
        id: 3,
        type: "Credit",
        accountNumber: "0000007812",
        linkedDateAndTime: new Date(),
        amount: 1_54_000,
      },
    ],
  },
] as const;
