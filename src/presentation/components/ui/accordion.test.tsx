import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Accordion } from './accordion'

describe('Accordion', () => {
  it('mostra o resumo e fica fechado por padrão', () => {
    const { container } = render(<Accordion summary="Resumo">Conteúdo</Accordion>)
    expect(screen.getByText('Resumo')).toBeInTheDocument()
    expect(container.querySelector('details')).not.toHaveAttribute('open')
  })

  it('aceita open', () => {
    const { container } = render(
      <Accordion summary="Resumo" open>
        Conteúdo
      </Accordion>,
    )
    expect(container.querySelector('details')).toHaveAttribute('open')
  })
})
