import type { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

/** Item de dropdown (Figma: option). `selected` e repouso têm o mesmo visual; hover destaca. */
export function Option({ selected = false, className, type = 'button', ...props }: OptionProps) {
  return (
    <button
      type={type}
      role="option"
      aria-selected={selected}
      className={cn(
        'flex items-center justify-center bg-neutral-16 px-4 py-2 text-left font-mono text-body text-foreground transition-colors hover:bg-primary-40 hover:font-bold hover:text-accent-soft',
        className,
      )}
      {...props}
    />
  )
}

/** Figma: "list of options". Agrupa `Option`s com semântica de listbox. */
export function OptionList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="listbox" className={cn('flex flex-col gap-1', className)} {...props} />
}
