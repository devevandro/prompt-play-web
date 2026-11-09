# prompt-play-web — React + Next.js (App Router) + Tailwind v4

## Arquitetura (camadas)

```
src/
├── core/            # PURO: sem React, sem framework, sem I/O
│   ├── domain/      #   entities + contratos (repositories)
│   └── application/ #   use-cases (classes com `execute()`)
├── infra/           # implementações dos contratos (http, repositories) + container.ts
├── presentation/    # React: components/ui|layout, features/<nome>
├── shared/          # config e utilitários sem regra de negócio
└── app/             # APENAS rotas do App Router (layout.tsx, page.tsx, route.ts)
```

`app/` deve ser fina: chama casos de uso via `@/infra/container` e renderiza componentes de `presentation`.

## Regras (o ESLint reforça via `eslint.architecture.mjs`)

- Dependência só em um sentido: `presentation → infra/container → core`.
- `core` não importa React, Next, `infra`, `presentation` nem `app`.
- `infra` não importa `presentation` nem `app`.
- `presentation` só acessa `infra` via `@/infra/container`; não importa de `app`.
- Novo caso de uso: entity/contrato em `core/domain` → use-case em `core/application` → implementação em `infra` → registrar em `infra/container.ts` → componente em `presentation/features/<nome>` → usar na rota.
- Prefira Server Components; use `'use client'` apenas onde houver estado/efeitos/eventos.
- Imports usam o alias `@/` (= `src/`). Estilo: Tailwind utility classes; use `cn()` de `@/shared/lib/cn`.

## Comandos

- `pnpm dev` · `pnpm build` · `pnpm lint` · `pnpm typecheck` · `pnpm test` · `pnpm format`
- Testes: Vitest + Testing Library, arquivos `*.test.ts(x)` ao lado do código. Casos de uso devem ser testados sem React.

## Design tokens

- Todas as cores, fontes, tamanhos de texto, raios, sombras e breakpoints vivem em `src/shared/styles/tokens.css` (fonte: Figma PromptPlay).
- Use as utilitárias semânticas (`bg-background`, `text-foreground-muted`, `text-label`, `font-display`, `shadow-glow-md`). As paletas padrão do Tailwind foram desativadas (`--color-*: initial`), então `bg-slate-*`, `text-indigo-*` etc. não geram estilo.
- Não use cores hex/rgb nem valores arbitrários (`w-[13px]`, `bg-[#...]`) fora do `tokens.css`. Faltou um token? Adicione-o lá.

## Componentes do design system

- `presentation/components/ui`: `Button` (+ `buttonVariants` para links), `DownloadButton`, `OptionCard`, `NavLink`, `SectionTitle`, `Option`/`OptionList`, `Card`. `presentation/components/layout`: `Header`, `Footer`, `Brand`.
- Páginas e features só compõem esses componentes. Faltou algo? Crie o componente aqui (com teste e uma entrada em `/design-system`) antes de usá-lo na página.
- Variantes via `cva`. `cn()` conhece os tokens do DS (`text-label`, `shadow-glow-*`, `bg-gradient-primary`); ao criar novos tokens de fonte/sombra, registre-os em `shared/lib/cn.ts` e cubra no `cn.test.ts`.
- Textos e links de site (nav, contato, texto legal) vêm de `shared/config/site.ts`, não ficam dentro dos componentes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
