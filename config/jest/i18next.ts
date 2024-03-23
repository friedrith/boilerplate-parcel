import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import defaultEnglish from '~/public/locales/en/default.json'
import defaultFrench from '~/public/locales/fr/default.json'

import languages from '~/src/utils/services/translation/languages'

i18n.use(initReactI18next).init({
  ns: ['default'],
  fallbackLng: 'en',
  supportedLngs: languages.map(l => l.value),
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: { default: defaultEnglish },
    fr: { default: defaultFrench },
  },
})

export default i18n
