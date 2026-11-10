import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { OptionCard } from './option-card'

describe('OptionCard', () => {
  it('renderiza título, descrição e link', () => {
    render(<OptionCard href="/comandos/radio" icon={<svg />} title="Rádio" description="Acessar" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/comandos/radio')
    expect(screen.getByRole('heading', { name: 'Rádio' })).toBeInTheDocument()
    expect(screen.getByText('Acessar')).toBeInTheDocument()
  })

  it('usa o texto padrão da ação', () => {
    render(<OptionCard href="#" icon={<svg />} title="T" description="D" />)
    expect(screen.getByText('ver mais opções')).toBeInTheDocument()
  })
})
