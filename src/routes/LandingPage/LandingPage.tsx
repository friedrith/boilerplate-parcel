import Hello from './components/Hello'
import LanguageSwitcher from '../../components/organisms/LanguageSwitcher'
import User from '~/src/types/User'

export default function LandingPage() {
  const user: User = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'foo.bar@baz.com',
  }

  return (
    <div>
      <LanguageSwitcher />
      <div className="h-screen flex items-center justify-center">
        <main>
          <h1>Title</h1>
          <Hello user={user} />
        </main>
      </div>
    </div>
  )
}
