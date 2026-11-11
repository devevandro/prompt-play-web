import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export interface CommandChipProps extends HTMLAttributes<HTMLElement> {
  /** Fundo do chip: `light` sobre linha preta, `dark` sobre linha cinza (zebra da tabela). */
  tone?: 'light' | 'dark'
}

/** Figma: chip de comando da tabela (ex.: `music`, `radio`). */
export function CommandChip({ tone = 'light', className, ...props }: CommandChipProps) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center rounded-md px-8 py-2 font-display text-body-lg font-medium text-foreground capitalize',
        tone === 'light' ? 'bg-chip' : 'bg-chip-dark',
        className,
      )}
      {...props}
    />
  )
}
