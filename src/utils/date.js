export const getCurrentDate = () => {
  const date = new Date();
  const koreaTime = date.getTime() + 9 * 60 * 60 * 1000;
  const koreaDate = new Date(koreaTime);
  const currentYear = koreaDate.getFullYear();
  const currentMonth = koreaDate.getMonth() + 1;
  const currentDate = koreaDate.getDate() - 1;
  return `${currentYear}. ${currentMonth}. ${currentDate}`;
};
