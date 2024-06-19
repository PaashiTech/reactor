import { BarData } from "./MonthlyBarChart";

export const barData: BarData[] = [
  { value: 650, label: "Jan 24" },
  { value: 500, label: "Feb 24" },
  { value: 745, label: "Mar 24" },
  { value: 320, label: "Apr 24" },
  { value: 600, label: "May 24" },
  { value: 256, label: "Jun 24" },
  { value: 300, label: "July 24" },
];

export const getMonthYearList = () => {
  const monthYearList: string[] = [];
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < 24; i++) {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const formattedMonthYear = `${monthNames[month]} ${year}`;
    monthYearList.push(formattedMonthYear);
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return monthYearList;
};
