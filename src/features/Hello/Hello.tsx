export interface HelloProps {
  title: string
}

export default function Hello({ title }: HelloProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">{title}</div>
  )
}
