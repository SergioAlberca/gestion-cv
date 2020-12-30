import { format } from "date-fns";

export function formatDate(date: string, typeFormat: string) {
  return format(new Date(date), typeFormat);
}
