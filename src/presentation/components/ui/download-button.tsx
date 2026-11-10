import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

/**
 * Botão de download (Figma: btn_download).
 * - `default`: variante 01 (macOS), hover em teal.
 * - `alt`: variantes 02/03 (Debian/Ubuntu, repositório), idle mais claro e hover em ciano.
 */
const downloadButtonVariants = cva(
  'group flex w-full items-center justify-center gap-4 rounded-md border p-2 font-mono text-body font-bold capitalize transition-[color,background-color,border-color,box-shadow] hover:shadow-glow-xs',
  {
    variants: {
      tone: {
        default:
          'border-neutral-40 bg-neutral-8 text-foreground-soft hover:border-border-active hover:bg-primary-16 hover:text-accent-soft',
        alt: 'border-neutral-alt bg-neutral-alt-16 text-foreground-strong hover:border-cyan hover:bg-cyan-16 hover:text-cyan-soft',
      },
    },
    defaultVariants: { tone: 'default' },
  },
)

const icons = {
  default: { idle: '/assets/icons/download-muted.svg', hover: '/assets/icons/download-accent.svg' },
  alt: { idle: '/assets/icons/download-light.svg', hover: '/assets/icons/download-cyan.svg' },
} as const

export interface DownloadButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof downloadButtonVariants> {
  href: string
}

export function DownloadButton({
  tone = 'default',
  className,
  children,
  ...props
}: DownloadButtonProps) {
  const set = icons[tone ?? 'default']
  return (
    <a className={cn(downloadButtonVariants({ tone }), className)} {...props}>
      {children}
      <Image src={set.idle} alt="" width={16} height={16} className="group-hover:hidden" />
      <Image src={set.hover} alt="" width={16} height={16} className="hidden group-hover:block" />
    </a>
  )
}
