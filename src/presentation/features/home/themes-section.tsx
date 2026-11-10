import Image from 'next/image'
import { Container } from '@/presentation/components/layout/container'
import { SectionTitle } from '@/presentation/components/ui/section-title'
import { ThemeCard } from '@/presentation/components/ui/theme-card'

export interface ThemeItem {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface ThemesSectionProps {
  title: string
  action: { label: string; href: string }
  items: ThemeItem[]
}

/** Home > "temas": fundo em rede (imagem decorativa), título com link e linha de cards (460px cada, 40px de gap, 1460px no total). */
export function ThemesSection({ title, action, items }: ThemesSectionProps) {
  return (
    <section id="temas" className="relative isolate overflow-hidden bg-background pt-20 pb-22">
      <Image
        src="/assets/backgrounds/choose-theme.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <Container>
        <SectionTitle title={title} action={action} />
      </Container>
      <ul className="mx-auto mt-12 grid max-w-373 gap-10 px-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((theme) => (
          <li key={theme.slug}>
            <ThemeCard
              className="h-full"
              image={{ src: theme.image, alt: theme.imageAlt }}
              title={theme.title}
              description={theme.description}
              href={`/temas/${theme.slug}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
