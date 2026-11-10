import Link from 'next/link'
import { buttonVariants } from '@/presentation/components/ui/button'
import { NavLink } from '@/presentation/components/ui/nav-link'
import { Brand } from './brand'
import { Container } from './container'

export interface HeaderLink {
  label: string
  href: string
}

export interface HeaderProps {
  links: HeaderLink[]
  cta: HeaderLink
  /** Href do link atual, para marcar o item como ativo. */
  activeHref?: string
}

/** Figma: menu/footer > menu. Links de seção somem abaixo de `lg` (não cabem junto da marca e do CTA); o CTA permanece. */
export function Header({ links, cta, activeHref }: HeaderProps) {
  return (
    <header className="bg-background">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Brand />
        <nav aria-label="Principal" className="flex items-center gap-10">
          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} active={link.href === activeHref}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link href={cta.href} className={buttonVariants({ size: 'md' })}>
            {cta.label}
          </Link>
        </nav>
      </Container>
    </header>
  )
}
