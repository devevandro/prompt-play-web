import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

/**
 * Coluna central do site: 1160px de conteúdo (Figma: 220px de margem em 1600px).
 * Abaixo de `xl` (1200px) ocupa a largura toda com 16px de respiro; a partir de `xl`
 * o respiro some e o max-width vira exatamente o conteúdo.
 */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-content px-4 xl:px-0', className)} {...props} />
}
