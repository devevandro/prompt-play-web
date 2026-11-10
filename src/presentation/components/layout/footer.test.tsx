import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './footer'

describe('Footer', () => {
  it('renderiza contato, endereço, links e texto legal', () => {
    render(
      <Footer
        contact={{ phone: '+55 43 99999-9999', email: 'a@b.com', address: ['Rua X', 'Cidade Y'] }}
        links={[{ label: 'Temas', href: '/#temas' }]}
        legal="Alguns direitos reservados"
      />,
    )
    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument()
    expect(screen.getByText('+55 43 99999-9999')).toBeInTheDocument()
    expect(screen.getByText('Cidade Y')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Acessibilidade' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Temas' })).toHaveAttribute('href', '/#temas')
    expect(screen.getByText('Alguns direitos reservados')).toBeInTheDocument()
  })
})
