import Image from 'next/image'
import Link from 'next/link'

/** Marca do site: ícone de terminal + "PromptPlay" (Prompt em display, Play em mono teal). O texto some abaixo de `sm` para o CTA caber ao lado. */
export function Brand({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} aria-label="PromptPlay" className="flex items-end gap-4">
      <Image src="/assets/brand/logo-mark.svg" alt="" width={60} height={60} priority />
      <span className="hidden text-lead text-foreground capitalize sm:inline">
        <span className="font-display font-medium">Prompt</span>
        <span className="font-mono font-bold text-primary">Play</span>
      </span>
    </Link>
  )
}
