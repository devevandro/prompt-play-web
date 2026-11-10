import { cn } from '@/shared/lib/cn'
import { MoreLink } from './more-link'

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
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <Heading className="font-display text-title font-extrabold text-foreground uppercase md:text-display">
          {title}
        </Heading>
        {action && <MoreLink href={action.href}>{action.label}</MoreLink>}
      </div>
      {description && <p className="text-lead text-foreground-muted">{description}</p>}
    </div>
  )
}
