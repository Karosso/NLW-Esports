import { WeekDaysEnum } from '../models/interfaces/WeekDays';

export const convertHoursStringToMinutes = (hoursString: string) => {
  const [hours, minutes] = hoursString.split(':').map(Number);
  return hours * 60 + minutes;
};

export const convertMinutesToHoursString = (minutesAmount: number) => {
  const minutes = String(minutesAmount % 60).padStart(2, '0');
  const hours = String(Math.trunc(minutesAmount / 60)).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getWeekDays = (listDays: string[]) => {
  const days = listDays.reduce(
    (acc, current) => `${acc} \u2022 ${WeekDaysEnum[Number(current)]}`,
    '',
  );
  return days;
};

export const getHoursString = (startHour: number, endHour: number) => {
  const start = convertMinutesToHoursString(startHour);
  const end = convertMinutesToHoursString(endHour);
  return `De ${start} até ${end}`;
};
