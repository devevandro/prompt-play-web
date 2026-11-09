// Regras de fronteira entre camadas (usadas pelo eslint.config.* de cada stack).
// Direção permitida: presentation -> infra/container -> core. O core não conhece ninguém.
const restrict = (group, message) => ({
  'no-restricted-imports': ['error', { patterns: [{ group, message }] }],
})

export const architecture = [
  {
    files: ['src/core/**/*.{ts,tsx}'],
    rules: restrict(
      [
        '@/infra/*',
        '@/presentation/*',
        '@/app/*',
        'react',
        'react-dom',
        'react-dom/*',
        'react/*',
        'next',
        'next/*',
        'react-router-dom',
      ],
      'core é puro: não pode depender de infra, presentation, app, React ou framework.',
    ),
  },
  {
    files: ['src/infra/**/*.{ts,tsx}'],
    rules: restrict(
      ['@/presentation/*', '@/app/*'],
      'infra não pode depender de presentation/app.',
    ),
  },
  {
    files: ['src/presentation/**/*.{ts,tsx}'],
    rules: restrict(
      ['@/infra/*', '!@/infra/container', '@/app/*'],
      'presentation só acessa infra via "@/infra/container" e nunca importa de app.',
    ),
  },
]
