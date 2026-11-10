import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './card'

describe('Card', () => {
  it('renderiza filhos e mescla className', () => {
    render(<Card className="max-w-sm">Conteúdo</Card>)
    const el = screen.getByText('Conteúdo')
    expect(el).toHaveClass('border-border', 'max-w-sm')
  })
})
