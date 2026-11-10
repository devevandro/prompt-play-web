import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('renderiza o link', () => {
    render(<NavLink href="/temas">Temas</NavLink>)
    expect(screen.getByRole('link', { name: 'Temas' })).toHaveAttribute('href', '/temas')
  })

  it('mantém o tamanho de fonte do DS junto da cor', () => {
    render(<NavLink href="/temas">Temas</NavLink>)
    expect(screen.getByRole('link')).toHaveClass('text-label', 'text-foreground-muted')
  })

  it('marca aria-current quando ativo', () => {
    render(
      <NavLink href="/temas" active>
        Temas
      </NavLink>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page')
  })

  it('não marca aria-current quando inativo', () => {
    render(<NavLink href="/temas">Temas</NavLink>)
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-current')
  })
})
