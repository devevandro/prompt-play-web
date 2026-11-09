import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/shared/lib/cn'

export interface SectionTitleProps {
  title: string
  description?: string
  /** Link "ver mais opções" à direita do título. */
  action?: { label: string; href: string }
  /** `section`: título grande com descrição. `subtitle`: título menor em cor primária. */
  variant?: 'section' | 'subtitle'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

/** Figma: "titulo" (titulo / sub_titulo). */
export function SectionTitle({
  title,
  description,
  action,
  variant = 'section',
  as: Heading = 'h2',
  className,
}: SectionTitleProps) {
  if (variant === 'subtitle') {
    return (
      <Heading
        className={cn('font-display text-title font-extrabold text-primary capitalize', className)}
      >
        {title}
      </Heading>
    )
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-end justify-between gap-4">
        <Heading className="font-display text-title font-extrabold text-foreground uppercase md:text-display">
          {title}
        </Heading>
        {action && (
          <Link
            href={action.href}
            className="flex shrink-0 items-center gap-5 px-0.5 py-px text-small text-foreground-muted uppercase underline hover:text-primary"
          >
            {action.label}
            <Image src="/assets/icons/north-east-muted.svg" alt="" width={15} height={15} />
          </Link>
        )}
      </div>
      {description && <p className="text-lead text-foreground-muted">{description}</p>}
    </div>
  )
}
