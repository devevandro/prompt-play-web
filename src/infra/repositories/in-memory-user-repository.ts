import type { User } from '@/core/domain/entities/user'
import type { UserRepository } from '@/core/domain/repositories/user-repository'

/** Implementação de exemplo. Para uma API real, crie `HttpUserRepository` usando `infra/http`. */
export class InMemoryUserRepository implements UserRepository {
  private readonly data: User[] = [
    { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: '2', name: 'Alan Turing', email: 'alan@example.com' },
    { id: '3', name: 'Grace Hopper', email: 'grace@example.com' },
  ]

  async findAll(): Promise<User[]> {
    return this.data
  }
}
