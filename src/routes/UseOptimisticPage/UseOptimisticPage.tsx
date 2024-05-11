import { useState, useOptimistic } from 'react'

interface UseOptimisticProps {
  currentName: string
  onUpdateName: (name: string) => void
}

const updateName = async (name: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return name
}

function UseOptimistic({ currentName, onUpdateName }: UseOptimisticProps) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName)

  const submitAction = async formData => {
    const newName = formData.get('name')
    setOptimisticName(newName)
    const updatedName = await updateName(newName)
    onUpdateName(updatedName)
  }

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  )
}

export default function UseOptimisticPage() {
  const [name, setName] = useState('John Doe')

  return (
    <div>
      <h1>UseOptimistic</h1>
      <UseOptimistic currentName={name} onUpdateName={setName} />
    </div>
  )
}
