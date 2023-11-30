import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isVariableValid(variable: Array<any> | Object): boolean {
  return variable !== null && variable !== undefined;
}
