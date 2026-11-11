import { Container } from '@/presentation/components/layout/container'
import { Accordion } from '@/presentation/components/ui/accordion'
import { CommandTable, type CommandRow } from '@/presentation/components/ui/command-table'
import { Divider } from '@/presentation/components/ui/divider'
import { SectionTitle } from '@/presentation/components/ui/section-title'

export interface CommandGroup {
  slug: string
  title: string
  summary: string
  rows?: CommandRow[]
}

export interface CommandsPageProps {
  title: string
  description: string
  firstAccess: { title: string; headers: [string, string]; rows: CommandRow[] }
  groups: CommandGroup[]
}

/** Página "comandos": tabela de primeiro acesso + grupos em acordeão (playback, sources, library). */
export function CommandsPage({ title, description, firstAccess, groups }: CommandsPageProps) {
  return (
    <div className="bg-hero pt-20 pb-40">
      <Container className="flex flex-col gap-20">
        <SectionTitle as="h1" title={title} description={description} />

        <section aria-labelledby="primeiro-acesso" className="flex flex-col gap-10">
          <SectionTitle id="primeiro-acesso" as="h2" variant="subtitle" title={firstAccess.title} />
          <CommandTable headers={firstAccess.headers} rows={firstAccess.rows} />
          <Divider />
        </section>

        {groups.map((group, index) => (
          <section key={group.slug} aria-labelledby={group.slug} className="flex flex-col gap-10">
            <SectionTitle id={group.slug} as="h2" variant="subtitle" title={group.title} />
            <Accordion summary={group.summary}>
              {group.rows && <CommandTable headers={firstAccess.headers} rows={group.rows} />}
            </Accordion>
            {index < groups.length - 1 && <Divider />}
          </section>
        ))}
      </Container>
    </div>
  )
}
