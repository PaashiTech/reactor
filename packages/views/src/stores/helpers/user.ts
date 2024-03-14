const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const computeUserFullName = (nameObj: {
  first: string;
  middle: string;
  last: string;
}) => {
  return (
    nameObj.first +
    " " +
    (nameObj.middle ? nameObj.middle + " " : "") +
    nameObj.last
  );
};

export const computeDoBString = (dobISOString: string) => {
  let dobObject = new Date(dobISOString);

  return (
    dobObject.getDate().toString() +
    "-" +
    months[dobObject.getMonth()] +
    "-" +
    dobObject.getFullYear().toString()
  );
};
