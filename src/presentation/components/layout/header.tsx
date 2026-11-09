import type { ReactNode } from 'react'
import { siteConfig } from '@/shared/config/site'

/** `nav` é injetado para manter o layout independente de router/framework. */
export function Header({ nav }: { nav?: ReactNode }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <span className="font-semibold text-slate-900">{siteConfig.name}</span>
        <nav className="flex gap-4 text-sm text-slate-600">{nav}</nav>
      </div>
    </header>
  )
}
