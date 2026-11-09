import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './header'

const links = [
  { label: 'Temas', href: '/#temas' },
  { label: 'Download', href: '/#download' },
]

describe('Header', () => {
  it('renderiza marca, links e CTA', () => {
    render(<Header links={links} cta={{ label: 'Baixar app', href: '/#download' }} />)
    expect(screen.getByRole('navigation', { name: 'Principal' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Temas' })).toHaveAttribute('href', '/#temas')
    expect(screen.getByRole('link', { name: 'Baixar app' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'PromptPlay' })).toHaveAttribute('href', '/')
  })

  it('marca o link ativo', () => {
    render(<Header links={links} cta={{ label: 'Baixar app', href: '#' }} activeHref="/#temas" />)
    expect(screen.getByRole('link', { name: 'Temas' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Download' })).not.toHaveAttribute('aria-current')
  })
})
