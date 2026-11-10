import { Hero } from '@/presentation/features/home/hero'
import { ThemesSection } from '@/presentation/features/home/themes-section'
import { siteConfig } from '@/shared/config/site'

/** `app/` é só a camada de rotas: compõe as seções da home. */
export default function HomePage() {
  return (
    <>
      <Hero {...siteConfig.hero} />
      <ThemesSection {...siteConfig.themes} />
    </>
  )
}
