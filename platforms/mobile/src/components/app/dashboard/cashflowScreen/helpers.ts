import { SectionListData } from "react-native";
import { TransactionType } from "./contants";

export const convertToSectionListFormat = (
  transactions: TransactionType[]
): SectionListData<TransactionType>[] => {
  // Helper function to format timestamp to date string
  const formatDate = (timestamp: string): string => {
    const date = new Date(parseInt(timestamp, 10));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Create a map to group transactions by date
  const groupedTransactions: { [key: string]: TransactionType[] } = {};

  transactions.forEach((transaction) => {
    const date = formatDate(transaction.timeStamp);
    if (!groupedTransactions[date]) {
      groupedTransactions[date] = [];
    }
    groupedTransactions[date].push(transaction);
  });

  // Convert the map to an array of sections
  const sections: SectionListData<TransactionType>[] = Object.keys(
    groupedTransactions
  ).map((date) => ({
    title: date,
    data: groupedTransactions[date],
  }));

  return sections;
};

export const formatTime = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp, 10));
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutesStr}${ampm}`;
};
