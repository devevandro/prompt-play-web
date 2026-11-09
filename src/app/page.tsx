import { container } from '@/infra/container'
import { UserList } from '@/presentation/features/users/user-list'

/** Server Component: chama o caso de uso direto no servidor. `app/` é só a camada de rotas. */
export default async function HomePage() {
  const users = await container.getUsers.execute()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">React + Next.js + Tailwind</h1>
      <UserList users={users} />
    </section>
  )
}
