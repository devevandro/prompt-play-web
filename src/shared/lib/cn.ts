import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Tokens customizados do design system (ver `shared/styles/tokens.css`).
 * Sem isso o tailwind-merge trata `text-label` como cor e o descarta quando
 * aparece junto de `text-foreground`, e `bg-gradient-primary` como cor de fundo.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'title', 'lead', 'label', 'body', 'small', 'caption'] }],
      shadow: [{ shadow: ['glow-xs', 'glow-sm', 'glow-md'] }],
      'bg-image': [{ bg: ['gradient-primary'] }],
    },
  },
})

/** `cn` do shadcn: junta classes e resolve conflitos do Tailwind (incluindo os tokens do DS). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
