import { useTransition } from 'react'

const wait = async () => new Promise(resolve => setTimeout(resolve, 5000))

export default function UseTransitionPage() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = () => {
    startTransition(async () => {
      await wait()
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'loading' : 'Update'}
      </button>
    </div>
  )
}
