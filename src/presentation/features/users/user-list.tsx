import type { User } from '@/core/domain/entities/user'
import { Card } from '@/presentation/components/ui/card'

/** Componente "burro": só recebe dados por props. Fácil de testar e reutilizar. */
export function UserList({ users }: { users: User[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {users.map((u) => (
        <li key={u.id}>
          <Card>
            <p className="font-medium text-slate-900">{u.name}</p>
            <p className="text-sm text-slate-500">{u.email}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}
