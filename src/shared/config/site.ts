export const siteConfig = {
  name: 'PromptPlay',
  description: 'PromptPlay, seu terminal de áudios.',
  nav: [
    { label: 'Temas', href: '/#temas' },
    { label: 'Comandos', href: '/comandos' },
    { label: 'Download', href: '/download' },
  ],
  cta: { label: 'Baixar app', href: '/download' },
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
  download: {
    title: 'download',
    action: { label: 'ver mais opções', href: '/download' },
    items: [
      {
        slug: 'windows',
        title: 'Windows',
        description: 'Requer Windows 10,11 (x64/ram)',
        icon: '/assets/icons/windows.svg',
        href: '/download#windows',
      },
      {
        slug: 'macos',
        title: 'macOS',
        description: 'Universal (Apple Silicon/ Intel)',
        icon: '/assets/icons/apple.svg',
        href: '/download#macos',
      },
      {
        slug: 'linux',
        title: 'Linux',
        description: '.Deb, .Rpm, .Tar.Gz',
        icon: '/assets/icons/linux.svg',
        href: '/download#linux',
      },
      {
        slug: 'source',
        title: 'Código-fonte',
        description: 'Repositório Público',
        icon: '/assets/icons/github.svg',
        href: '/download#codigo-fonte',
      },
    ],
  },
  legal: 'E©F © Alguns direitos reservados',
  commands: {
    title: 'comandos',
    description: 'Referência dos comandos aceitos pela entrada de terminal do Prompt Play.',
    firstAccess: {
      title: 'Primeiro acesso',
      headers: ['Comando', 'Descrição'] as [string, string],
      rows: [
        { commands: ['music'], description: 'Abre o player na biblioteca de músicas locais.' },
        {
          commands: ['radio', 'fm'],
          description: 'Abre o player em transmissões de rádio FM e rádios da internet.',
        },
        {
          commands: ['exit'],
          description: 'Mantém o aplicativo na tela inicial de primeiro acesso.',
        },
        { commands: ['quit'], description: 'Fecha o aplicativo.' },
        { commands: ['help'], description: 'Exibe a dica de primeiro acesso.' },
      ],
    },
    groups: [
      {
        slug: 'playback',
        title: 'Playback',
        summary: 'Playback são comandos pra você navegar no PromptPlay',
      },
      {
        slug: 'sources',
        title: 'Sources',
        summary: 'Os comandos específicos da fonte só funcionam no modo ativo',
      },
      {
        slug: 'library',
        title: 'Library',
        summary: 'Comandos para ver quais são suas rádios na sua biblioteca',
      },
    ],
  },
}
