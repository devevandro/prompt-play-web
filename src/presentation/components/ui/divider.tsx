import Image from 'next/image'
import { cn } from '@/shared/lib/cn'

/** Figma: "deco". Filete com glow que separa seções; vaza 8px para cada lado da coluna. */
export function Divider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('relative -mx-2 h-0', className)}>
      <Image
        src="/assets/decorations/divider.svg"
        alt=""
        width={1176}
        height={20}
        className="absolute top-0 left-0 -mt-2.5 h-5 w-full max-w-none"
      />
    </div>
  )
}
