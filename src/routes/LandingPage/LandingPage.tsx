import Hello from './components/Hello'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default function LandingPage() {
  const user = {
    id: '1',
    name: 'John Doe',
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
