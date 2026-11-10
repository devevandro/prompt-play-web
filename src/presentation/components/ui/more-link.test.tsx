import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MoreLink } from './more-link'

describe('MoreLink', () => {
  it('renderiza link com href e texto', () => {
    render(<MoreLink href="/temas">ver mais opções</MoreLink>)
    expect(screen.getByRole('link', { name: 'ver mais opções' })).toHaveAttribute('href', '/temas')
  })

  it('mantém tamanho de fonte e cor do texto após o merge de classes', () => {
    render(<MoreLink href="/temas">ver mais</MoreLink>)
    expect(screen.getByRole('link')).toHaveClass('text-link', 'text-foreground-muted')
  })

  it('mescla className', () => {
    render(
      <MoreLink href="/temas" className="self-start">
        ver mais
      </MoreLink>,
    )
    expect(screen.getByRole('link')).toHaveClass('self-start')
  })
})
