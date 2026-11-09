import Image from 'next/image'
import { NavLink } from '@/presentation/components/ui/nav-link'
import type { HeaderLink } from './header'

export interface FooterProps {
  contact: { phone: string; email: string; address: string[] }
  links: HeaderLink[]
  legal: string
}

/** Figma: menu/footer > footer. Três colunas no desktop, empilhadas abaixo de `lg`. */
export function Footer({ contact, links, legal }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-background pt-20 pb-8">
      <div className="mx-auto grid max-w-content gap-10 px-4 lg:grid-cols-4">
        <div>
          <Image src="/assets/brand/logo-wordmark.svg" alt="PromptPlay" width={152} height={30} />
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="font-display text-lead font-medium text-foreground uppercase">Contato</h2>
          <div className="max-w-100 text-label leading-8 text-foreground-muted uppercase">
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
          <hr className="max-w-100 border-divider" />
          <address className="max-w-100 text-label leading-8 text-foreground-muted not-italic">
            {contact.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <hr className="max-w-100 border-divider" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-lead font-medium text-foreground uppercase">
            Acessibilidade
          </h2>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} tone="footer">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-16 text-center text-label text-foreground-muted">{legal}</p>

      <div className="pointer-events-none absolute bottom-7 left-7 hidden h-17 w-38 overflow-hidden md:block">
        <Image
          src="/assets/brand/footer-watermark.png"
          alt=""
          width={151}
          height={151}
          className="opacity-32"
        />
      </div>
    </footer>
  )
}
