import type { Metadata } from 'next'
import { CommandsPage } from '@/presentation/features/commands/commands-page'
import { siteConfig } from '@/shared/config/site'

export const metadata: Metadata = { title: `Comandos · ${siteConfig.name}` }

export default function ComandosPage() {
  return <CommandsPage {...siteConfig.commands} />
}
