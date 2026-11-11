import Image from 'next/image'
import type { DetailsHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export interface AccordionProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  summary: ReactNode
}

/** Figma: "acordeon". `<details>` nativo (sem JS): acessível e funciona em Server Components. */
export function Accordion({ summary, className, children, ...props }: AccordionProps) {
  return (
    <details
      className={cn('group rounded-md border-2 border-neutral-40 bg-neutral-8', className)}
      {...props}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-2 font-mono text-lead text-foreground-soft [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <Image
          src="/assets/icons/chevron-forward-soft.svg"
          alt=""
          width={9}
          height={15}
          className="shrink-0 rotate-90 transition-transform group-open:-rotate-90"
        />
      </summary>
      <div className="px-4 pt-2 pb-4">{children}</div>
    </details>
  )
}
