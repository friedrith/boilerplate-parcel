import { render, screen } from '@testing-library/react'
import Hello from '..'

describe('Hello', () => {
  it('should render title', () => {
    const title = 'Hello, World!'

    render(<Hello user={title} />)

    expect(screen.queryByText(title)).toBeInTheDocument()
  })
})
