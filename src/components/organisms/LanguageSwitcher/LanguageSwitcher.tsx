import { useTranslation } from 'react-i18next'

import { languages } from '~/src/utils/services/i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <select
      onChange={event => i18n.changeLanguage(event.target.value)}
      value={i18n.language}
    >
      {languages.map(lang => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}
