export const getCurrentDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDay() + 23;

  return `${currentYear}. ${currentMonth}. ${currentDay}`;
};
