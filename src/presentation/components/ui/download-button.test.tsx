import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DownloadButton } from './download-button'

describe('DownloadButton', () => {
  it('renderiza link com href e texto', () => {
    render(<DownloadButton href="/mac.dmg">Mac Universal</DownloadButton>)
    expect(screen.getByRole('link', { name: 'Mac Universal' })).toHaveAttribute('href', '/mac.dmg')
  })

  it('usa a paleta alt quando tone="alt"', () => {
    render(
      <DownloadButton href="#" tone="alt">
        Debian
      </DownloadButton>,
    )
    expect(screen.getByRole('link')).toHaveClass('border-neutral-alt')
  })
})
