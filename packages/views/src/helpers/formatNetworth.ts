type FormatNetWorthFunction = (netWorth: number) => string;

export const formatNetWorth: FormatNetWorthFunction = (netWorth) => {
  if (isNaN(netWorth)) return "Invalid Networth";

  const suffixes = ["", "K", "L", "Cr"];
  let index = 1;
  let initialDivisor = 1000; // For the first division

  while (netWorth >= initialDivisor && index < suffixes.length) {
    netWorth /= initialDivisor;
    index += 1;
    initialDivisor = 100; // Set 100 for subsequent divisions
  }

  return "₹" + netWorth.toFixed(2) + suffixes[index - 1];
};
