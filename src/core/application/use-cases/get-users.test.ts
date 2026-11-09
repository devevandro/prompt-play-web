import { describe, expect, it } from 'vitest'
import type { UserRepository } from '../../domain/repositories/user-repository'
import { GetUsers } from './get-users'

describe('GetUsers', () => {
  it('retorna os usuários do repositório', async () => {
    const repo: UserRepository = {
      findAll: async () => [{ id: '1', name: 'Ada', email: 'ada@example.com' }],
    }

    const users = await new GetUsers(repo).execute()

    expect(users).toHaveLength(1)
    expect(users[0].name).toBe('Ada')
  })
})
