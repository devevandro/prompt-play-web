import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CommandTable } from './command-table'

const rows = [
  { commands: ['music'], description: 'Abre o player.' },
  { commands: ['radio', 'fm'], description: 'Abre rádios.' },
]

describe('CommandTable', () => {
  it('renderiza cabeçalhos e uma linha por item', () => {
    render(<CommandTable headers={['Comando', 'Descrição']} rows={rows} />)
    expect(screen.getByRole('columnheader', { name: 'Comando' })).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(3)
  })

  it('separa comandos equivalentes com "ou"', () => {
    render(<CommandTable headers={['Comando', 'Descrição']} rows={rows} />)
    const row = screen.getByText('Abre rádios.').closest('tr') as HTMLElement
    expect(within(row).getByText('ou')).toBeInTheDocument()
    expect(within(row).getByText('fm')).toBeInTheDocument()
  })
})
