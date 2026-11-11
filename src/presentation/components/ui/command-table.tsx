import { CommandChip } from '@/presentation/components/ui/command-chip'
import { cn } from '@/shared/lib/cn'

export interface CommandRow {
  /** Um ou mais comandos equivalentes (exibidos separados por "ou"). */
  commands: string[]
  description: string
}

export interface CommandTableProps {
  headers: [string, string]
  rows: CommandRow[]
  className?: string
}

/** Figma: "tabela" de comandos. Linhas alternam preto / cinza escuro. */
export function CommandTable({ headers, rows, className }: CommandTableProps) {
  return (
    <div className={cn('overflow-x-auto rounded-md border-2 border-table-border', className)}>
      <table className="w-full min-w-xl border-collapse text-left">
        <thead>
          <tr className="bg-surface-teal">
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className={cn(
                  'h-14 px-8 text-center font-display text-lead font-extrabold text-accent-soft capitalize',
                  index === 0 ? 'w-1/4' : 'border-l border-table-border',
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const dark = index % 2 === 1
            return (
              <tr key={row.commands.join('|')} className={dark ? 'bg-surface-alt' : 'bg-canvas'}>
                <td className="h-16 border-t border-table-border px-4">
                  <div className="flex items-end gap-2">
                    {row.commands.map((command, i) => (
                      <span key={command} className="contents">
                        {i > 0 && (
                          <span className="font-mono text-body-lg text-foreground">ou</span>
                        )}
                        <CommandChip tone={dark ? 'dark' : 'light'}>{command}</CommandChip>
                      </span>
                    ))}
                  </div>
                </td>
                <td className="h-16 border-t border-l border-table-border px-4 font-mono text-label text-foreground">
                  {row.description}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
