import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './hero'

const props = {
  title: [
    { text: 'Controle sua ' },
    { text: 'mídia', accent: true },
    { text: ' como um ' },
    { text: 'desenvolvedor', accent: true },
  ],
  description: 'A Terminal-First Media Platform.',
  cta: { label: 'Baixar para Windows', href: '/#download' },
  imageAlt: 'Notebook exibindo o terminal',
}

describe('Hero', () => {
  it('renderiza o título completo como h1', () => {
    render(<Hero {...props} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Controle sua mídia como um desenvolvedor',
    )
  })

  it('destaca só os trechos marcados com accent', () => {
    render(<Hero {...props} />)
    expect(screen.getByText('mídia')).toHaveClass('text-primary')
    expect(screen.getByText('desenvolvedor')).toHaveClass('text-primary')
    expect(screen.getByText(/Controle sua/)).not.toHaveClass('text-primary')
  })

  it('renderiza a descrição', () => {
    render(<Hero {...props} />)
    expect(screen.getByText('A Terminal-First Media Platform.')).toBeInTheDocument()
  })

  it('renderiza o botão de download como link', () => {
    render(<Hero {...props} />)
    expect(screen.getByRole('link', { name: 'Baixar para Windows' })).toHaveAttribute(
      'href',
      '/#download',
    )
  })

  it('renderiza a imagem com texto alternativo', () => {
    render(<Hero {...props} />)
    expect(screen.getByRole('img', { name: 'Notebook exibindo o terminal' })).toBeInTheDocument()
  })
})
