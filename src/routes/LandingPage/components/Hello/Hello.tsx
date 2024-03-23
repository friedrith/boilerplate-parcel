import { useTranslation } from 'react-i18next'
import User from '../../../../types/User'

export interface HelloProps {
  user: User
}

export default function Hello({ user }: HelloProps) {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      {t('hello', { name: user.name })}
    </div>
  )
}
