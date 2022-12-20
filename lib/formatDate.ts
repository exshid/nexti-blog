import { parseISO, format } from "date-fns";

export const formatDate = (date: any): any => {
  return format(parseISO(date), "MMMM dd, yyyy");
};
