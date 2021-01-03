import { format } from "date-fns";

export function formatDate(date: Date, typeFormat: string) {
  return format(date, typeFormat);
}
