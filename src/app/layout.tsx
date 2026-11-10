import type { Metadata } from 'next'
import { Montserrat_Alternates, Space_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/presentation/components/layout/footer'
import { Header } from '@/presentation/components/layout/header'
import { siteConfig } from '@/shared/config/site'

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-montserrat-alternates',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserratAlternates.variable} ${spaceMono.variable}`}>
      <body>
        <Header links={siteConfig.nav} cta={siteConfig.cta} />
        <main>{children}</main>
        <Footer contact={siteConfig.contact} links={siteConfig.nav} legal={siteConfig.legal} />
      </body>
    </html>
  )
}
