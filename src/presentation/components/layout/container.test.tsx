import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Container } from './container'

describe('Container', () => {
  it('centraliza e limita a largura ao conteúdo do site', () => {
    render(<Container>Conteúdo</Container>)
    expect(screen.getByText('Conteúdo')).toHaveClass('mx-auto', 'max-w-content', 'xl:px-0')
  })

  it('mescla className e repassa props', () => {
    render(
      <Container className="grid" data-testid="c">
        x
      </Container>,
    )
    expect(screen.getByTestId('c')).toHaveClass('grid', 'max-w-content')
  })
})
