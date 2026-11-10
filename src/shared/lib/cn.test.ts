import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('mantém tamanho de fonte do DS junto de uma cor', () => {
    expect(cn('text-label uppercase text-foreground-muted')).toBe(
      'text-label uppercase text-foreground-muted',
    )
  })

  it('o último tamanho de fonte do DS vence', () => {
    expect(cn('text-small', 'text-lead')).toBe('text-lead')
  })

  it('mantém o tamanho hero junto de uma cor', () => {
    expect(cn('text-hero text-foreground')).toBe('text-hero text-foreground')
  })

  it('mantém os tamanhos de card (heading, body-lg, link) junto de uma cor', () => {
    expect(cn('text-heading text-foreground')).toBe('text-heading text-foreground')
    expect(cn('text-body-lg text-foreground-muted')).toBe('text-body-lg text-foreground-muted')
    expect(cn('text-link text-foreground-muted')).toBe('text-link text-foreground-muted')
  })

  it('o glow suave é uma sombra e não conflita com cor de texto', () => {
    expect(cn('shadow-glow-soft text-foreground')).toBe('shadow-glow-soft text-foreground')
    expect(cn('shadow-glow-soft', 'shadow-glow-md')).toBe('shadow-glow-md')
  })

  it('max-w do DS é substituído por outro max-w', () => {
    expect(cn('max-w-content', 'max-w-373')).toBe('max-w-373')
  })

  it('o último glow vence', () => {
    expect(cn('shadow-glow-sm', 'shadow-glow-md')).toBe('shadow-glow-md')
  })

  it('mantém sombra do DS junto de uma cor de texto', () => {
    expect(cn('shadow-glow-sm text-foreground')).toBe('shadow-glow-sm text-foreground')
  })

  it('degradê do DS e cor de fundo são grupos distintos', () => {
    expect(cn('bg-gradient-primary', 'bg-surface')).toBe('bg-gradient-primary bg-surface')
  })

  it('cor de texto posterior ainda substitui a anterior', () => {
    expect(cn('text-foreground', 'text-primary')).toBe('text-primary')
  })
})
