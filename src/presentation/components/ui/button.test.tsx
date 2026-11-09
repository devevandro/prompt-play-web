import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button, buttonVariants } from './button'

describe('Button', () => {
  it('renderiza como button type="button" com o texto', () => {
    render(<Button>Baixar app</Button>)
    const btn = screen.getByRole('button', { name: 'Baixar app' })
    expect(btn).toHaveAttribute('type', 'button')
  })

  it('aplica o tamanho lg', () => {
    render(<Button size="lg">Ok</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3')
  })

  it('mantém tamanho de fonte e cor do texto após o merge de classes', () => {
    render(<Button>Ok</Button>)
    expect(screen.getByRole('button')).toHaveClass('text-label', 'text-foreground')
  })

  it('respeita disabled', () => {
    render(<Button disabled>Ok</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('expõe buttonVariants para links', () => {
    expect(buttonVariants({ size: 'md' })).toContain('bg-gradient-primary')
  })
})
