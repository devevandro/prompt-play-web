import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/presentation/components/layout/container'
import { buttonVariants } from '@/presentation/components/ui/button'
import { cn } from '@/shared/lib/cn'

export interface HeroTitleSegment {
  text: string
  /** Trecho destacado na cor primária. */
  accent?: boolean
}

export interface HeroProps {
  title: HeroTitleSegment[]
  description: string
  cta: { label: string; href: string }
  imageAlt: string
}

/** Home > "noticia principal": título, descrição, botão de download e notebook com anéis decorativos. */
export function Hero({ title, description, cta, imageAlt }: HeroProps) {
  return (
    <section className="bg-hero">
      <Container className="flex flex-col gap-10 pt-20 pb-32 xl:flex-row xl:items-start">
        <div className="flex flex-col gap-10 xl:w-140.25 xl:shrink-0">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-3xl font-bold text-foreground uppercase sm:text-4xl md:text-hero">
              {title.map((segment) => (
                <span key={segment.text} className={cn(segment.accent && 'text-primary')}>
                  {segment.text}
                </span>
              ))}
            </h1>
            <p className="text-lead text-foreground-muted">{description}</p>
          </div>
          <Link
            href={cta.href}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'self-start whitespace-normal sm:whitespace-nowrap',
            )}
          >
            <Image src="/assets/icons/windows.svg" alt="" width={32} height={28} />
            {cta.label}
          </Link>
        </div>

        <div className="relative xl:h-119 xl:w-139.75">
          <div
            aria-hidden="true"
            className="absolute top-48.5 left-0 hidden size-70.5 rounded-full border border-primary-8 xl:block"
          >
            <div className="absolute inset-5.5 rounded-full border border-primary-16" />
          </div>
          <div
            aria-hidden="true"
            className="absolute top-0 left-69.25 hidden size-70.5 rounded-full border border-primary-8 xl:block"
          >
            <div className="absolute inset-5.5 rounded-full border border-primary-16" />
          </div>
          <Image
            src="/assets/hero/laptop.png"
            alt={imageAlt}
            width={482}
            height={312}
            priority
            className="relative mx-auto h-auto w-full max-w-120.5 xl:absolute xl:top-20.5 xl:left-12 xl:mx-0"
          />
        </div>
      </Container>
    </section>
  )
}
