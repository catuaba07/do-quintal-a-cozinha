import { RecipeDifficulty } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { intervalToDuration } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRecipeDifficulty(difficulty: RecipeDifficulty) {
  if (difficulty === RecipeDifficulty.EASY)
    return "Fácil";
  else if (difficulty === RecipeDifficulty.INTERMEDIARY)
    return "Intermediário";
  else
    return "Difícil";
}


export function formatMinutes(mins: number) {
  const duration = intervalToDuration({ start: 0, end: mins * 60 * 1000 });
  const { hours = 0, minutes = 0 } = duration;

  if (hours === 0) return `${minutes}min`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}min`;
}

