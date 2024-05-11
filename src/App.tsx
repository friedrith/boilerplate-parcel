import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'
import LandingPage from './routes/LandingPage'
import RefPage from './routes/RefPage'
import UsePage from './routes/UsePage'
import UseTransitionPage from './routes/UseTransitionPage'
import UseActionStatePage from './routes/UseActionStatePage'

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ref" element={<RefPage />} />
      <Route path="/use" element={<UsePage />} />
      <Route path="/useTransition" element={<UseTransitionPage />} />
      <Route path="/useActionState" element={<UseActionStatePage />} />
    </Routes>
  )
}
