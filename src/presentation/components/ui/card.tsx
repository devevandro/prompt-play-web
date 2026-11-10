import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

/** Container genérico com a superfície do design system (borda e fundo teal translúcidos). */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-md border border-border bg-primary-8 p-4', className)} {...props} />
  )
}
