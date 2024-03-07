export const getFormattedAmount = (amount: number): string => {
  return "₹" + (amount / 1_00_000).toFixed(2) + "L";
};

export const getFormattedAccountNumber = (accountNumber: string): string => {
  return "*" + accountNumber.slice(-4);
};

export const getFormattedLinkedDateAndTime = (date: Date) => {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (date.toDateString() === now.toDateString()) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";
    return `Today • ${hours}:${minutes < 10 ? "0" : ""}${minutes}${period}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";
    return `Yesterday • ${hours}:${minutes < 10 ? "0" : ""}${minutes}${period}`;
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";

    const padStart = (value: number) => String(value).padStart(2, "0");

    return `${padStart(day)}/${padStart(month)}/${year} • ${hours}:${padStart(
      minutes
    )}${period}`;
  }
};

export const getLinkedAccountText = (accounts) => {
  const totalAccounts = accounts.length;
  const linkedAccounts = accounts.filter(({ isLinked }) => isLinked).length;

  if (!linkedAccounts) return "No accounts linked";

  return `${linkedAccounts} out of ${totalAccounts} accounts linked`;
};

export const getProgressPercent = (accounts) => {
  const totalAccounts: number = accounts.length;
  const linkedAccounts: number = accounts.filter(
    ({ isLinked }) => isLinked
  ).length;

  return (linkedAccounts / totalAccounts) * 100;
};

export const getAllAccountsAmount = (linkedAccountsData) => {
  const amount = linkedAccountsData.reduce(
    (acc, curr) =>
      acc +
      curr.accounts
        .map((account) => (account.amount ? account.amount : 0))
        .reduce((acc, curr) => acc + curr, 0),
    0
  );

  return "₹" + (amount / 1_00_000).toFixed(2) + "L";
};
