export interface InputProps {
  value: string
  onChange: (value: string) => void
  dataTestId?: string
  ref?: React.RefObject<HTMLInputElement>
}

export default function Input({
  value,
  onChange,
  dataTestId,
  ref,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      data-testid={dataTestId}
      ref={ref}
    />
  )
}
