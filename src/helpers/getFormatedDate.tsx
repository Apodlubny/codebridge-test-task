export const getFormatedDate = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleString("en-US", { month: "long" });
  const dayNumber = d.getDate();
  const day =
    dayNumber.toString() +
    ["th", "st", "nd", "rd"][
      (dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3
        ? 0
        : dayNumber % 10
    ];
  return `${month} ${day}, ${year}`;
};

