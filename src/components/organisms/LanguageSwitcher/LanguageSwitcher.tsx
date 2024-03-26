import { useTranslation } from 'react-i18next'

import languages from '~/src/utils/services/translation/languages'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <select
      aria-label={t('changeLanguage')}
      aria-controls="body"
      onChange={event => i18n.changeLanguage(event.target.value)}
      value={i18n.language}
      aria-expanded="false"
    >
      {languages.map(lang => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}
