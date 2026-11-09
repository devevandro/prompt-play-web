import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** `cn` do shadcn: junta classes e resolve conflitos do Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
