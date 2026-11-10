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

## Design System

**Fonte de design:** Figma `PromptPlay` — https://www.figma.com/design/XlaPMyCdlj4hvI3k8eaaK6/PromptPlay (página `site` = telas, página `componente` = componentes). Só tema escuro. Code Connect não é usado (o plano Starter do Figma não o suporta).

Telas (`node-id`): home `1-2549` · themes `411-546` · commands `483-8671` · comma_playback `500-8819` · download `356-292` e `607-3885` · command_source `500-9236` · command_03 `507-4162`.

### Regra de ouro

Páginas e features **nunca inventam estilo**: só usam tokens e componentes do design system (DS). Se uma tela precisa de algo que o DS não tem, **adicione ao DS primeiro** (token ou componente), depois use na página.

Proibido fora de `src/shared/styles/tokens.css`: cores hex/rgb/hsl, valores arbitrários do Tailwind (`w-[13px]`, `bg-[#fff]`, `p-[calc(...)]`), fontes e sombras soltas. O ESLint barra isso (`eslint.design-system.mjs`, regra `no-restricted-syntax`) e o hook de pre-commit também. Exceção pontual só com `// eslint-disable-next-line no-restricted-syntax` e justificativa.

### Tokens

- `src/shared/styles/tokens.css`: paleta bruta `--pp-*` em `:root` e tokens semânticos no `@theme` do Tailwind v4. Cores, fontes, escala de texto, raios, sombras e breakpoints (`sm` 576 · `md` 768 · `lg` 992 · `xl` 1200).
- Use as utilitárias semânticas (`bg-background`, `text-foreground-muted`, `text-label`, `font-display`, `shadow-glow-md`). As paletas padrão do Tailwind foram desativadas (`--color-*: initial`), então `bg-slate-*`, `text-indigo-*` etc. não geram estilo.
- Token novo: edite `tokens.css`. Se for tamanho de fonte, sombra ou degradê, registre também em `shared/lib/cn.ts` (senão o `tailwind-merge` o trata como cor) e cubra em `cn.test.ts`.

### Componentes

- `presentation/components/ui`: `Button` (+ `buttonVariants` para links), `DownloadButton`, `OptionCard`, `NavLink`, `SectionTitle`, `MoreLink`, `ThemeCard`, `Option`/`OptionList`, `Card`. `presentation/components/layout`: `Container` (coluna de 1160px: use em toda seção/página), `Header`, `Footer`, `Brand`. `presentation/features/home`: `Hero`, `ThemesSection`.
- Componente novo: crie em `presentation/components/ui|layout` com variantes via `cva`, só tokens, um teste ao lado e uma entrada em `/design-system` (`src/app/design-system/page.tsx`) antes de usá-lo na página.
- Assets do Figma ficam em `public/assets/` em `icons/`, `brand/`, `hero/`, `themes/` e `backgrounds/` (nunca referencie URLs temporárias do Figma). Imagens de fundo de seção são decorativas: `next/image` com `fill`, `alt=""` e `-z-10` dentro de uma seção `relative isolate`.
- Textos e links do site (nav, contato, texto legal) vêm de `shared/config/site.ts`, não ficam dentro dos componentes.

### Fluxo para implementar uma tela

1. `get_design_context` + `get_screenshot` do frame (skill `figma:figma-design-to-code`).
2. Monte a página reutilizando **somente** componentes e tokens do DS; lógica em `presentation/features/<nome>`.
3. Adapte o código de referência do Figma ao projeto, sem colar o output cru.
4. Compare com o screenshot (desktop e mobile) e rode `pnpm lint`, `pnpm typecheck`, `pnpm test` antes de avançar.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
