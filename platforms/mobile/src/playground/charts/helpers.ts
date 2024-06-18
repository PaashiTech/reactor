type FormatAmountFuction = (amount: number) => string;

export const formatAmount: FormatAmountFuction = (amount) => {
  if (isNaN(amount)) return "Invalid Value";

  const suffixes = ["", "K", "L", "Cr"];
  let index = 1;
  let initialDivisor = 1000; // For the first division

  while (amount >= initialDivisor && index < suffixes.length) {
    amount /= initialDivisor;
    index += 1;
    initialDivisor = 100; // Set 100 for subsequent divisions
  }

  return "₹" + amount.toFixed(1) + suffixes[index - 1];
};
