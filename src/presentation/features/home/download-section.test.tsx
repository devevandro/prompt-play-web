import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DownloadSection } from './download-section'

const items = [
  {
    slug: 'windows',
    title: 'Windows',
    description: 'Requer Windows 10,11',
    icon: '/a.svg',
    href: '/download#windows',
  },
  {
    slug: 'linux',
    title: 'Linux',
    description: '.Deb, .Rpm',
    icon: '/b.svg',
    href: '/download#linux',
  },
]

describe('DownloadSection', () => {
  it('renderiza título, link de ação e um card por plataforma', () => {
    render(
      <DownloadSection
        title="download"
        action={{ label: 'ver mais opções', href: '/download' }}
        items={items}
      />,
    )
    expect(screen.getByRole('heading', { name: 'download' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /windows/i })).toHaveAttribute(
      'href',
      '/download#windows',
    )
    expect(screen.getByRole('link', { name: /linux/i })).toHaveAttribute('href', '/download#linux')
  })
})
