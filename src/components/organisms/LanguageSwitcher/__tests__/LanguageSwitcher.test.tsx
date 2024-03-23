import { render, screen } from '@testing-library/react'
import LanguageSwitcher from '..'
import mockWrapper from '~/src/__mocks__/mockWrapper'

describe('LanguageSwitcher', () => {
  it('should render', () => {
    const wrapper = mockWrapper().withI18n().build()

    render(<LanguageSwitcher />, { wrapper })

    expect(screen.queryByText('English')).toBeInTheDocument()
  })
})
