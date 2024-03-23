import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'
import LandingPage from './routes/LandingPage'

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}
