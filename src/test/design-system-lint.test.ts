// @vitest-environment node
import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'

const eslint = new ESLint({ cwd: process.cwd() })
const filePath = 'src/presentation/components/ui/probe.tsx'

async function violations(className: string, kind: 'attr' | 'template' = 'attr') {
  const jsx =
    kind === 'attr'
      ? `export const A = () => <div className="${className}" />`
      : `export const A = () => <div className={\`${className}\`} />`
  const [result] = await eslint.lintText(jsx, { filePath })
  return result.messages.filter((m) => m.ruleId === 'no-restricted-syntax')
}

describe('regra de ouro do design system (ESLint)', () => {
  it.each([
    ['cor hex', 'text-[#fff] p-4'],
    ['cor hex em bg arbitrário', 'bg-[#1f9899]'],
    ['tamanho arbitrário em px', 'w-[13px]'],
    ['tamanho arbitrário em rem', 'hover:h-[2.5rem]'],
    ['número arbitrário', 'z-[3]'],
    ['função calc', 'p-[calc(100%-2rem)]'],
    ['cor rgb solta', 'shadow-[0_0_8px_rgb(0,0,0)]'],
    ['hex solto em string', 'border-color:#abcdef'],
  ])('barra %s', async (_nome, className) => {
    expect((await violations(className)).length).toBeGreaterThan(0)
  })

  it('barra violação dentro de template literal', async () => {
    expect((await violations('flex w-[13px]', 'template')).length).toBeGreaterThan(0)
  })

  it('aponta a violação com mensagem do design system', async () => {
    const [msg] = await violations('bg-[#fff]')
    expect(msg.message).toMatch(/tokens\.css/)
  })

  it.each([
    ['tokens do DS', 'bg-primary text-label font-display shadow-glow-md'],
    ['escala do Tailwind', 'p-4 gap-2 min-h-49 max-w-content'],
    ['âncora de URL', '/#temas'],
    ['variante arbitrária (shadcn)', 'data-[state=open]:bg-primary [&_svg]:size-4'],
    ['layout arbitrário sem valor de cor/medida', 'grid-cols-[1fr_2fr]'],
  ])('permite %s', async (_nome, className) => {
    expect(await violations(className)).toEqual([])
  })

  it('não se aplica a arquivos de teste', async () => {
    const [result] = await eslint.lintText('export const x = "bg-[#fff]"', {
      filePath: 'src/presentation/components/ui/probe.test.tsx',
    })
    expect(result.messages.filter((m) => m.ruleId === 'no-restricted-syntax')).toEqual([])
  })
})
