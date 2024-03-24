export interface InputProps {
  value: string
  onChange: (value: string) => void
  dataTestId?: string
}

export default function Input({ value, onChange, dataTestId }: InputProps) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      data-testid={dataTestId}
    />
  )
}
