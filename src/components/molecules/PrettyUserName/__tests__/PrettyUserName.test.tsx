import { render, screen } from '@testing-library/react'
import mockUser from '~/src/types/__mocks__/mockUser'
import PrettyUserName from '..'

describe('PrettyUserName', () => {
  it('should render name', () => {
    const user = mockUser({ firstName: 'John', lastName: 'Doe' })

    render(<PrettyUserName user={user} />)

    expect(screen.queryByText('John Doe')).toBeInTheDocument()
  })
})
