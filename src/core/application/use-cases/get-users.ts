import type { User } from '../../domain/entities/user'
import type { UserRepository } from '../../domain/repositories/user-repository'

/** Caso de uso: regra de aplicação, depende apenas de abstrações. */
export class GetUsers {
  constructor(private readonly users: UserRepository) {}

  execute(): Promise<User[]> {
    return this.users.findAll()
  }
}
