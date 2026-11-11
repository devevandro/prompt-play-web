import { Radio, Search } from 'lucide-react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Container } from '@/presentation/components/layout/container'
import { Accordion } from '@/presentation/components/ui/accordion'
import { Button } from '@/presentation/components/ui/button'
import { Card } from '@/presentation/components/ui/card'
import { CommandChip } from '@/presentation/components/ui/command-chip'
import { CommandTable } from '@/presentation/components/ui/command-table'
import { Divider } from '@/presentation/components/ui/divider'
import { DownloadButton } from '@/presentation/components/ui/download-button'
import { MoreLink } from '@/presentation/components/ui/more-link'
import { NavLink } from '@/presentation/components/ui/nav-link'
import { Option, OptionList } from '@/presentation/components/ui/option'
import { OptionCard } from '@/presentation/components/ui/option-card'
import { SectionTitle } from '@/presentation/components/ui/section-title'
import { ThemeCard } from '@/presentation/components/ui/theme-card'

export const metadata: Metadata = { title: 'Design System · PromptPlay' }

const colors = [
  ['background', 'bg-background'],
  ['surface', 'bg-surface'],
  ['surface-alt', 'bg-surface-alt'],
  ['foreground', 'bg-foreground'],
  ['foreground-strong', 'bg-foreground-strong'],
  ['foreground-soft', 'bg-foreground-soft'],
  ['foreground-subtle', 'bg-foreground-subtle'],
  ['foreground-muted', 'bg-foreground-muted'],
  ['primary', 'bg-primary'],
  ['primary-strong', 'bg-primary-strong'],
  ['primary-deep', 'bg-primary-deep'],
  ['accent', 'bg-accent'],
  ['accent-soft', 'bg-accent-soft'],
  ['focus', 'bg-focus'],
  ['primary-8', 'bg-primary-8'],
  ['primary-16', 'bg-primary-16'],
  ['primary-40', 'bg-primary-40'],
  ['neutral-8', 'bg-neutral-8'],
  ['neutral-16', 'bg-neutral-16'],
  ['neutral-40', 'bg-neutral-40'],
  ['cyan', 'bg-cyan'],
  ['cyan-soft', 'bg-cyan-soft'],
  ['divider', 'bg-divider'],
] as const

const typeScale = [
  ['display', 'font-display text-display uppercase'],
  ['title', 'font-display text-title uppercase'],
  ['lead', 'text-lead'],
  ['label', 'text-label uppercase'],
  ['body', 'text-body'],
  ['small', 'text-small'],
  ['caption', 'text-caption'],
] as const

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-display text-lead font-bold text-primary uppercase">{title}</h2>
      {children}
    </section>
  )
}

/** Página de revisão visual do design system: tokens e componentes com variantes/estados. */
export default function DesignSystemPage() {
  return (
    <Container className="flex flex-col gap-16 py-8">
      <SectionTitle
        as="h1"
        title="Design System"
        description="Tokens e componentes do PromptPlay."
      />

      <Section title="Cores">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {colors.map(([name, cls]) => (
            <li key={name} className="flex flex-col gap-2">
              <span className={`h-12 rounded-md border border-border ${cls}`} />
              <span className="text-caption text-foreground-subtle">{name}</span>
            </li>
          ))}
          <li className="flex flex-col gap-2">
            <span className="h-12 rounded-md bg-gradient-primary" />
            <span className="text-caption text-foreground-subtle">gradient-primary</span>
          </li>
        </ul>
      </Section>

      <Section title="Tipografia">
        <ul className="flex flex-col gap-4">
          {typeScale.map(([name, cls]) => (
            <li key={name} className="flex flex-col gap-1">
              <span className="text-caption text-foreground-subtle">{name}</span>
              <span className={cls}>Controle sua mídia</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Sombras e raios">
        <div className="flex flex-wrap gap-6">
          {(['shadow-glow-xs', 'shadow-glow-sm', 'shadow-glow-md'] as const).map((s) => (
            <div
              key={s}
              className={`flex size-24 items-center justify-center rounded-md bg-surface text-caption ${s}`}
            >
              {s.replace('shadow-', '')}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-wrap items-center gap-6">
          <Button size="md">Baixar app</Button>
          <Button size="lg">Baixar para Windows</Button>
          <Button size="md" disabled>
            Desabilitado
          </Button>
        </div>
      </Section>

      <Section title="DownloadButton">
        <div className="grid max-w-xl gap-4">
          <DownloadButton href="#" tone="default">
            Mac Universal
          </DownloadButton>
          <DownloadButton href="#" tone="alt">
            Debian/Ubuntu
          </DownloadButton>
          <DownloadButton href="#" tone="alt">
            Repositório público
          </DownloadButton>
        </div>
      </Section>

      <Section title="OptionCard">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <OptionCard href="#" icon={<Radio />} title="Rádio" description="Acessar o modo rádio." />
          <OptionCard
            href="#"
            icon={<Search />}
            title="Rádio search"
            description="Pesquisa por: estado, cidade, região e nome."
          />
        </div>
        <p className="text-caption text-foreground-subtle">
          Ícones acima são placeholders (lucide); as páginas usam os ícones do Figma.
        </p>
      </Section>

      <Section title="ThemeCard">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ThemeCard
            href="#"
            image={{ src: '/assets/themes/tokyo-night.png', alt: 'Tema Tokyo Night' }}
            title="Tokyo Night"
            description="Cores vibrantes e um visual futurista."
          />
          <ThemeCard
            href="#"
            image={{ src: '/assets/themes/synthwave.png', alt: 'Tema Synthwave' }}
            title="Synthwave"
            description="Vibe retro-futurista com cores neon e um toque dos anos 90."
          />
        </div>
      </Section>

      <Section title="MoreLink">
        <div className="flex flex-wrap items-center gap-10">
          <MoreLink href="#">ver mais opções</MoreLink>
        </div>
      </Section>

      <Section title="NavLink">
        <div className="flex flex-wrap items-center gap-10">
          <NavLink href="#">Temas</NavLink>
          <NavLink href="#" active>
            Comandos (ativo)
          </NavLink>
          <NavLink href="#" tone="footer">
            Footer
          </NavLink>
        </div>
      </Section>

      <Section title="SectionTitle">
        <SectionTitle
          title="Temas"
          description="Personalize suas emoções, viva essa experiência"
          action={{ label: 'ver mais opções', href: '#' }}
        />
        <SectionTitle variant="subtitle" title="Primeiro acesso" />
      </Section>

      <Section title="Option">
        <OptionList className="max-w-xs">
          <Option>Selecione outra opção</Option>
          <Option selected>Opção selecionada</Option>
        </OptionList>
      </Section>

      <Section title="CommandChip / CommandTable">
        <CommandChip>music</CommandChip>
        <CommandTable
          headers={['Comando', 'Descrição']}
          rows={[
            { commands: ['music'], description: 'Abre o player na biblioteca de músicas locais.' },
            { commands: ['radio', 'fm'], description: 'Abre o player em transmissões de rádio.' },
          ]}
        />
      </Section>

      <Section title="Accordion / Divider">
        <Accordion summary="Resumo do grupo de comandos">Conteúdo do acordeão.</Accordion>
        <Divider />
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">Container genérico com a superfície do DS.</Card>
      </Section>
    </Container>
  )
}
