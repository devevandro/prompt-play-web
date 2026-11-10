import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'

/**
 * Item de menu (Figma: menu / menu_footer).
 * Repouso: só texto. Hover: chevron + cor primária + traço. Ativo (`active`): chevron + cor primária.
 */
const navLinkVariants = cva(
  'group relative inline-flex items-center gap-1 font-mono text-label uppercase transition-colors hover:text-primary',
  {
    variants: {
      tone: {
        header: 'font-bold',
        footer: 'font-normal',
      },
      active: {
        true: 'text-primary',
        false: 'text-foreground-muted',
      },
    },
    defaultVariants: { tone: 'header', active: false },
  },
)

export interface NavLinkProps
  extends ComponentProps<typeof Link>, Omit<VariantProps<typeof navLinkVariants>, 'active'> {
  active?: boolean
}

export function NavLink({ tone, active = false, className, children, ...props }: NavLinkProps) {
  return (
    <Link
      aria-current={active ? 'page' : undefined}
      className={cn(navLinkVariants({ tone, active }), className)}
      {...props}
    >
      <span className="h-3.5 w-2 shrink-0">
        <Image
          src="/assets/icons/chevron-forward-active.svg"
          alt=""
          width={8}
          height={14}
          className={cn(
            'opacity-0 transition-opacity group-hover:opacity-100',
            active && 'opacity-100',
          )}
        />
      </span>
      {children}
      {tone !== 'footer' && !active && (
        <Image
          src="/assets/icons/horizontal-rule.svg"
          alt=""
          width={16}
          height={2}
          className="pointer-events-none absolute top-1/2 left-full ml-1 opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </Link>
  )
}
