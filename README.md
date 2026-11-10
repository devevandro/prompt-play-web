# prompt-play-web

Site do PromptPlay, o terminal de áudios.

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4 com tokens do design system
- shadcn/ui, Zod, Vitest + Testing Library
- ESLint (com regras de arquitetura), Prettier, Husky + lint-staged
- CI no GitHub Actions

## Como rodar

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

Se o `pnpm` falhar tentando baixar uma versão via Corepack, rode `corepack disable` e tente de novo.

## Arquitetura

Camadas em `src/`, com dependência em um único sentido (`presentation → infra/container → core`), reforçada pelo ESLint. Os detalhes estão em [`AGENTS.md`](./AGENTS.md).

## Design

Fonte de design: arquivo do Figma **PromptPlay** (`XlaPMyCdlj4hvI3k8eaaK6`).

- Páginas do Figma: `site` (telas) e `componente` (componentes do design system).
- Tokens em [`src/shared/styles/tokens.css`](./src/shared/styles/tokens.css): paleta bruta `--pp-*` e tokens semânticos no `@theme` do Tailwind (`bg-background`, `text-primary`, `font-display`, `text-label`...).
- Fontes: Montserrat Alternates (títulos e rótulos) e Space Mono (corpo).
- Breakpoints: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px.
- Apenas tema escuro.

### Componentes

Em `src/presentation/components/`: `ui/` (`Button`, `DownloadButton`, `OptionCard`, `NavLink`, `SectionTitle`, `Option`, `Card`) e `layout/` (`Header`, `Footer`, `Brand`). Todos usam só tokens e têm testes ao lado.

Assets do Figma (ícones e logos) ficam em `public/assets/`. Para revisar visualmente tokens e componentes, rode `pnpm dev` e abra `/design-system`.

## Status

- [x] Scaffold do projeto
- [x] Tokens do design system
- [x] Componentes base
- [ ] Code Connect
- [ ] Páginas
