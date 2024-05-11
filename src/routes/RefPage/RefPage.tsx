import { useEffect, useRef } from 'react'

import Input from '~/src/components/atoms/Input'

export default function RefPage() {
  const ref = useRef<HTMLInputElement>()

  useEffect(() => {
    ref.current.addEventListener('click', () => {
      alert('clicked')
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Input value="foo" onChange={() => {}} ref={ref} />
    </div>
  )
}
