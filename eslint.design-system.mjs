// Regra de ouro do design system: estilo só vem de tokens (src/shared/styles/tokens.css).
// Barra, em qualquer string/template de src/, cores soltas (hex, rgb, hsl, oklch...) e
// valores arbitrários do Tailwind com cor, número ou função (w-[13px], bg-[#fff], p-[calc(...)]).
//
// Não barra variantes arbitrárias nem layout (data-[state=open]:..., [&_svg]:size-4, grid-cols-[1fr_2fr]),
// usadas por componentes shadcn. Exceção pontual: `// eslint-disable-next-line no-restricted-syntax`
// com justificativa. Faltou um token? Adicione-o em tokens.css em vez de contornar a regra.

const HEX = String.raw`(^|[^\w&])#[0-9a-fA-F]{3,8}($|[^\w-])`
// `_` vira espaço nos valores arbitrários do Tailwind, então `\b` não serve como fronteira.
const COLOR_FN = String.raw`(^|[^a-zA-Z0-9])(rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\(`
const ARBITRARY = String.raw`(^|[\s:!])-?[a-z][a-z0-9-]*-\[(#|-?[0-9.]+(px|rem|em|%|vh|vw|svh|dvh|lvh|deg|ms|s)?\]|(rgb|rgba|hsl|hsla|oklch|calc|clamp|min|max|var|theme)\()`

const rules = [
  [
    HEX,
    'Cor hex fora do design system. Use um token (bg-primary, text-foreground...) ou adicione-o em src/shared/styles/tokens.css.',
  ],
  [
    COLOR_FN,
    'Cor rgb/hsl/oklch fora do design system. Use um token ou adicione-o em src/shared/styles/tokens.css.',
  ],
  [
    ARBITRARY,
    'Valor arbitrário do Tailwind (w-[13px], bg-[#fff]...). Use uma utilitária da escala/tokens ou adicione o token em src/shared/styles/tokens.css.',
  ],
]

const selectors = rules.flatMap(([regex, message]) => [
  { selector: `Literal[value=/${regex}/]`, message },
  { selector: `TemplateElement[value.raw=/${regex}/]`, message },
])

export const designSystem = [
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/*.test.{ts,tsx}'],
    rules: { 'no-restricted-syntax': ['error', ...selectors] },
  },
]
