import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Option, OptionList } from './option'

describe('Option', () => {
  it('expõe role option e aria-selected', () => {
    render(
      <OptionList>
        <Option>A</Option>
        <Option selected>B</Option>
      </OptionList>,
    )
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'A' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('option', { name: 'B' })).toHaveAttribute('aria-selected', 'true')
  })
})
