import { Suspense } from 'react'
import Async from './components/Async'

export default function UsePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Use
      <Suspense fallback={<div>Loading...</div>}>
        <Async />
      </Suspense>
    </div>
  )
}
