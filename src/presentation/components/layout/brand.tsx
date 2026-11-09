import Image from 'next/image'
import Link from 'next/link'

/** Marca do site: ícone de terminal + "PromptPlay" (Prompt em display, Play em mono teal). */
export function Brand({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} aria-label="PromptPlay" className="flex items-end gap-4">
      <Image src="/assets/brand/logo-mark.svg" alt="" width={60} height={60} priority />
      <span className="text-lead text-foreground capitalize">
        <span className="font-display font-medium">Prompt</span>
        <span className="font-mono font-bold text-primary">Play</span>
      </span>
    </Link>
  )
}
