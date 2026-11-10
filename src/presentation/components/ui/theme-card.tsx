import Image from 'next/image'
import { cn } from '@/shared/lib/cn'
import { MoreLink } from './more-link'

export interface ThemeCardProps {
  /** Miniatura do tema (proporção 428×257). */
  image: { src: string; alt: string }
  title: string
  description: string
  href: string
  /** Texto do link inferior. */
  actionLabel?: string
  className?: string
}

/** Figma: card_player (borda interna: 1px de borda + 15px de padding = os 16px do Figma). Miniatura, nome, descrição e link "ver mais opções". Reutilizável na home e em /temas. */
export function ThemeCard({
  image,
  title,
  description,
  href,
  actionLabel = 'ver mais opções',
  className,
}: ThemeCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col gap-4 rounded-lg border border-primary-deep p-3.75 shadow-glow-soft',
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={428}
        height={257}
        className="h-auto w-full rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-heading font-bold text-foreground">{title}</h3>
        <p className="text-body-lg text-foreground-muted">{description}</p>
      </div>
      <MoreLink href={href} className="self-start">
        {actionLabel}
      </MoreLink>
    </article>
  )
}
