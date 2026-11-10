import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemesSection } from './themes-section'

const props = {
  title: 'Escolha seu tema',
  action: { label: 'ver mais opções', href: '/temas' },
  items: [
    { slug: 'a', title: 'Tema A', description: 'Desc A.', image: '/a.png', imageAlt: 'Tema A' },
    { slug: 'b', title: 'Tema B', description: 'Desc B.', image: '/b.png', imageAlt: 'Tema B' },
  ],
}

describe('ThemesSection', () => {
  it('renderiza o título da seção e o link para todos os temas', () => {
    render(<ThemesSection {...props} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Escolha seu tema' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'ver mais opções' })[0]).toHaveAttribute(
      'href',
      '/temas',
    )
  })

  it('renderiza um card por tema, com link para a página do tema', () => {
    render(<ThemesSection {...props} />)
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 3, name: 'Tema B' })).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: 'ver mais opções' })
    expect(links.map((l) => l.getAttribute('href'))).toEqual(['/temas', '/temas/a', '/temas/b'])
  })

  it('usa a imagem em rede como fundo decorativo, atrás do conteúdo', () => {
    const { container } = render(<ThemesSection {...props} />)
    const bg = container.querySelector('section#temas > img')
    expect(bg).not.toBeNull()
    expect(bg).toHaveAttribute('alt', '')
    expect(bg).toHaveClass('-z-10', 'object-cover')
    expect(container.querySelector('section#temas')).toHaveClass('isolate')
  })

  it('é a âncora #temas do menu', () => {
    const { container } = render(<ThemesSection {...props} />)
    expect(container.querySelector('section#temas')).not.toBeNull()
  })
})
