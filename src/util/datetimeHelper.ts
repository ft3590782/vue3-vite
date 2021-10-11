import dayjs from "dayjs";

// const DATE_TIME_LONG_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

export const date2Start = (date: any) => {
  return dayjs(dayjs(date).format("YYYY-MM-DD")).toDate();
};

export const date2End = (date: any) => {
  return dayjs(dayjs(date).format("YYYY-MM-DD 23:59:59")).toDate();
};

export const date2T0 = (date: any) => {
  return date.toDate();
};

export const T02date = (date: any) => {
  return dayjs(date);
};

export const T02DateFormat = (date: any, format: string) => {
  return dayjs(date).format(format);
};
