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
      'font-size': [
        {
          text: [
            'hero',
            'heading',
            'body-lg',
            'link',
            'display',
            'title',
            'lead',
            'label',
            'body',
            'small',
            'caption',
          ],
        },
      ],
      'max-w': [{ 'max-w': ['content', 'page'] }],
      shadow: [{ shadow: ['glow-xs', 'glow-sm', 'glow-md', 'glow-soft'] }],
      'bg-image': [{ bg: ['gradient-primary', 'hero'] }],
    },
  },
})

/** `cn` do shadcn: junta classes e resolve conflitos do Tailwind (incluindo os tokens do DS). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
