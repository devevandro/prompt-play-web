import { GetUsers } from '@/core/application/use-cases/get-users'
import { InMemoryUserRepository } from './repositories/in-memory-user-repository'

/**
 * Composition root: único lugar que conhece as implementações concretas.
 * A UI importa daqui os casos de uso já montados.
 */
const userRepository = new InMemoryUserRepository()

export const container = {
  getUsers: new GetUsers(userRepository),
}
