import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export interface OptionCardProps {
  /** Ícone 24x24 (cada card traz o seu: rádio, apple, linux...). */
  icon: ReactNode
  title: string
  description: string
  href: string
  /** Texto do link que aparece no hover. */
  actionLabel?: string
  className?: string
}

/** Figma: "card menor" (card_opcao / card_opcao_hover). */
export function OptionCard({
  icon,
  title,
  description,
  href,
  actionLabel = 'ver mais opções',
  className,
}: OptionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex min-h-49 w-full flex-col gap-2 rounded-md border border-border bg-primary-8 p-6 transition-[background-color,border-color,box-shadow] hover:border-border-active hover:bg-primary-16 hover:shadow-glow-md focus-visible:border-border-active focus-visible:bg-primary-16 focus-visible:shadow-glow-md',
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <span aria-hidden="true" className="size-6 text-primary">
          {icon}
        </span>
        <h3 className="font-display text-body font-medium text-foreground uppercase">{title}</h3>
      </div>
      <p className="text-small text-foreground-subtle">{description}</p>
      <span className="absolute bottom-6 left-6 flex items-center gap-2 text-caption text-accent lowercase underline opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {actionLabel}
        <Image src="/assets/icons/north-east-accent.svg" alt="" width={10} height={10} />
      </span>
    </Link>
  )
}
