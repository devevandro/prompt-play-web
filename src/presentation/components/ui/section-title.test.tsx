import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './section-title'

describe('SectionTitle', () => {
  it('renderiza título, descrição e ação', () => {
    render(
      <SectionTitle
        title="Temas"
        description="Personalize"
        action={{ label: 'ver mais opções', href: '/temas' }}
      />,
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Temas' })).toBeInTheDocument()
    expect(screen.getByText('Personalize')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ver mais opções' })).toHaveAttribute('href', '/temas')
  })

  it('permite trocar o nível do heading', () => {
    render(<SectionTitle as="h1" title="Home" />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('variante subtitle não renderiza ação nem descrição', () => {
    render(<SectionTitle variant="subtitle" title="Primeiro acesso" />)
    expect(screen.getByRole('heading', { name: 'Primeiro acesso' })).toBeInTheDocument()
    expect(screen.queryByRole('link')).toBeNull()
  })
})
