export const convertHoursStringToMinutes = (hoursString: string) => {
  const [hours, minutes] = hoursString.split(":").map(Number);
  return hours * 60 + minutes;
};

export const convertMinutesToHoursString = (minutesAmount: number) => {
  const minutes = String(minutesAmount % 60).padStart(2, '0');
  const hours = String(Math.trunc(minutesAmount / 60)).padStart(2, '0');
  return `${hours}:${minutes}`;
};
