import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'

/** Figma: "opcao". Link sublinhado em caixa alta com seta, usado em títulos de seção e cards. */
export function MoreLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'inline-flex h-8.5 items-center gap-5 px-0.5 py-px text-link whitespace-nowrap text-foreground-muted uppercase underline transition-colors hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
      <Image src="/assets/icons/north-east-muted.svg" alt="" width={15} height={15} />
    </Link>
  )
}
