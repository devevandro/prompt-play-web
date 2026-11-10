import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeCard } from './theme-card'

const props = {
  image: { src: '/assets/themes/tokyo-night.png', alt: 'Terminal com o tema Tokyo Night' },
  title: 'Tokyo Night',
  description: 'Cores vibrantes e um visual futurista.',
  href: '/temas/tokyo-night',
}

describe('ThemeCard', () => {
  it('renderiza título, descrição e miniatura', () => {
    render(<ThemeCard {...props} />)
    expect(screen.getByRole('heading', { level: 3, name: 'Tokyo Night' })).toBeInTheDocument()
    expect(screen.getByText('Cores vibrantes e um visual futurista.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Terminal com o tema Tokyo Night' })).toBeInTheDocument()
  })

  it('o link "ver mais opções" aponta para o href do tema', () => {
    render(<ThemeCard {...props} />)
    expect(screen.getByRole('link', { name: 'ver mais opções' })).toHaveAttribute(
      'href',
      '/temas/tokyo-night',
    )
  })

  it('permite trocar o texto do link', () => {
    render(<ThemeCard {...props} actionLabel="ver tema" />)
    expect(screen.getByRole('link', { name: 'ver tema' })).toBeInTheDocument()
  })

  it('é um article (o card em si não é link: só o "ver mais")', () => {
    render(<ThemeCard {...props} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('mantém o glow e a borda do DS e mescla className', () => {
    render(<ThemeCard {...props} className="h-full" />)
    expect(screen.getByRole('article')).toHaveClass(
      'shadow-glow-soft',
      'border-primary-deep',
      'h-full',
    )
  })
})
