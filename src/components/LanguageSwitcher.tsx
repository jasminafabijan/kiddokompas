import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'

const LANG_LABEL: Record<Lang, string> = { sr: 'SR', en: 'EN' }

type LanguageSwitcherProps = {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { lang, t, path } = useI18n()
  const location = useLocation()

  return (
    <div
      className={`lang-switch${className ? ` ${className}` : ''}`}
      role="group"
      aria-label={t('nav.language')}
    >
      {(['sr', 'en'] as const).map((itemLang) => {
        const label = LANG_LABEL[itemLang]
        const isActive = itemLang === lang

        return isActive ? (
          <span key={itemLang} className="lang-switch-option is-active" aria-current="true">
            {label}
          </span>
        ) : (
          <Link
            key={itemLang}
            to={path.forLang[itemLang]}
            replace
            state={location.state}
            className="lang-switch-option"
            lang={itemLang}
            hrefLang={itemLang}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
