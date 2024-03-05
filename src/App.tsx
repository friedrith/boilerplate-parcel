import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Hello from './components/Hello'
import { useEffect } from 'react'

export default function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen flex items-center justify-center">
            <main>
              <h1>Title</h1>
              <Hello title={t('hello')} />
            </main>
          </div>
        }
      />
    </Routes>
  )
}
