import { useTranslation } from 'react-i18next'
import User from '../../../../types/User'
import PrettyUserName from '~/src/components/molecules/PrettyUserName'

export interface HelloProps {
  user: User
}

export default function Hello({ user }: HelloProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1>{t('hello')}</h1>
        <PrettyUserName user={user} />
      </div>
    </div>
  )
}
