import Hello from './components/Hello'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <div>
      <LanguageSwitcher />
      <div className="h-screen flex items-center justify-center">
        <main>
          <h1>Title</h1>
          <Hello title={t('hello')} />
        </main>
      </div>
    </div>
  )
}
