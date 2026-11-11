import Image from 'next/image'
import { Container } from '@/presentation/components/layout/container'
import { OptionCard } from '@/presentation/components/ui/option-card'
import { SectionTitle } from '@/presentation/components/ui/section-title'

export interface DownloadItem {
  slug: string
  title: string
  description: string
  /** Caminho do ícone em `public/assets/icons`. */
  icon: string
  href: string
}

export interface DownloadSectionProps {
  title: string
  action: { label: string; href: string }
  items: DownloadItem[]
}

/** Home > "download": título com link e 4 cards (260px cada, 40px de gap, 1160px no total). */
export function DownloadSection({ title, action, items }: DownloadSectionProps) {
  return (
    <section id="download" className="bg-background py-30">
      <Container className="flex flex-col gap-9">
        <SectionTitle title={title} action={action} />
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.slug}>
              <OptionCard
                className="h-full"
                href={item.href}
                title={item.title}
                description={item.description}
                icon={<Image src={item.icon} alt="" width={24} height={24} className="size-6" />}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
