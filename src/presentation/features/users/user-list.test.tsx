import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UserList } from './user-list'

describe('UserList', () => {
  it('renderiza nome e email de cada usuário', () => {
    render(<UserList users={[{ id: '1', name: 'Ada', email: 'ada@example.com' }]} />)

    expect(screen.getByText('Ada')).toBeInTheDocument()
    expect(screen.getByText('ada@example.com')).toBeInTheDocument()
  })
})
