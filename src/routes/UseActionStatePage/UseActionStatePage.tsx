import { useActionState } from 'react'

async function increment(previousState: number) {
  return previousState + 1
}

export default function UseActionStatePage() {
  const [state, formAction] = useActionState(increment, 0)

  return (
    <form className="min-h-screen flex items-center justify-center">
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}
