import Link from 'next/link'
import { buttonVariants } from '@/presentation/components/ui/button'
import { NavLink } from '@/presentation/components/ui/nav-link'
import { Brand } from './brand'

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

/** Figma: menu/footer > menu. Links de seção somem abaixo de `md`; o CTA permanece. */
export function Header({ links, cta, activeHref }: HeaderProps) {
  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-4">
        <Brand />
        <nav aria-label="Principal" className="flex items-center gap-10">
          <ul className="hidden items-center gap-10 md:flex">
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
      </div>
    </header>
  )
}
