import type { User } from '../entities/user'

/** Porta (contrato). A implementação concreta vive em `infra/`. */
export interface UserRepository {
  findAll(): Promise<User[]>
}
