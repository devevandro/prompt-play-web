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
