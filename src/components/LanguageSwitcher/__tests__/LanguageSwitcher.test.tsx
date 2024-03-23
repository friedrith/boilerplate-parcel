import { render } from '@testing-library/react'
import LanguageSwitcher from '..'

describe('LanguageSwitcher', () => [
  it('should render', () => {
    const { container } = render(<LanguageSwitcher />)

    expect(container).toMatchSnapshot()
  }),
])
