export const getFormattedDateAndTime = (date: Date) => {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (date.toDateString() === now.toDateString()) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";
    return `Today, ${hours}:${minutes < 10 ? "0" : ""}${minutes}${period}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";
    return `Yesterday, ${hours}:${minutes < 10 ? "0" : ""}${minutes}${period}`;
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "am" : "pm";

    const padStart = (value: number) => String(value).padStart(2, "0");

    return `${padStart(day)}/${padStart(month)}/${year}, ${hours}:${padStart(
      minutes
    )}${period}`;
  }
};
