export const siteConfig = {
  name: 'PromptPlay',
  description: 'PromptPlay, seu terminal de áudios.',
  nav: [
    { label: 'Temas', href: '/#temas' },
    { label: 'Comandos', href: '/#comandos' },
    { label: 'Download', href: '/#download' },
  ],
  cta: { label: 'Baixar app', href: '/#download' },
  contact: {
    phone: '+55 43 99999-9999',
    email: 'contato@promptplay.com',
    address: ['Rua: Maria Staiger Vilar, 59 - Fortunato Sibim', 'Cornélio Procópio - PR'],
  },
  hero: {
    title: [
      { text: 'Controle sua ' },
      { text: 'mídia', accent: true },
      { text: ' como um ' },
      { text: 'desenvolvedor', accent: true },
    ],
    description:
      'A Terminal-First Media Platform uma plataforma criada para transformar música e entretenimento em uma experiência mais rápida, limpa e intuitiva.',
    cta: { label: 'Baixar para Windows', href: '/#download' },
    imageAlt: 'Notebook exibindo o terminal do PromptPlay',
  },
  themes: {
    title: 'Escolha seu tema',
    action: { label: 'ver mais opções', href: '/temas' },
    items: [
      {
        slug: 'tokyo-night',
        title: 'Tokyo Night',
        description: 'Cores vibrantes e um visual futurista.',
        image: '/assets/themes/tokyo-night.png',
        imageAlt: 'Terminal do PromptPlay com o tema Tokyo Night',
      },
      {
        slug: 'synthwave',
        title: 'Synthwave',
        description: 'Vibe retro-futurista com cores neon e um toque dos anos 90.',
        image: '/assets/themes/synthwave.png',
        imageAlt: 'Terminal do PromptPlay com o tema Synthwave',
      },
      {
        slug: 'claude-code',
        title: 'Claude Code',
        description: 'Tema moderno e minimalista focado na produtividade.',
        image: '/assets/themes/claude-code.png',
        imageAlt: 'Terminal do PromptPlay com o tema Claude Code',
      },
    ],
  },
  legal: 'E©F © Alguns direitos reservados',
}
