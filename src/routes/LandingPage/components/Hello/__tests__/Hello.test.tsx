import { render, screen } from '@testing-library/react'
import Hello from '..'
import mockUser from '~/src/types/__mocks__/mockUser'
import mockWrapper from '~/src/__mocks__/mockWrapper'

describe('Hello', () => {
  it('should render hello', () => {
    const wrapper = mockWrapper().withI18n().build()
    const user = mockUser({ firstName: 'John', lastName: 'Doe' })

    render(<Hello user={user} />, { wrapper })

    expect(screen.queryByText('Hello')).toBeInTheDocument()
  })
})
