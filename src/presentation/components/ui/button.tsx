import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

/**
 * Botão com degradê (Figma: btn_card_azul). Hover escurece o fundo e ganha glow.
 * Exportado como `buttonVariants` para estilizar links (`<Link className={buttonVariants()}>`).
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary font-display text-label font-semibold whitespace-nowrap text-foreground uppercase transition-shadow hover:bg-none hover:bg-surface hover:shadow-glow-sm disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        md: 'px-4 py-2',
        lg: 'px-6 py-3',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ size }), className)} {...props} />
}
