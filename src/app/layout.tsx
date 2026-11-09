import type { Metadata } from 'next'
import { Montserrat_Alternates, Space_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
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
        <Header
          nav={
            <>
              <Link href="/">Home</Link>
              <Link href="/about">Sobre</Link>
            </>
          }
        />
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
