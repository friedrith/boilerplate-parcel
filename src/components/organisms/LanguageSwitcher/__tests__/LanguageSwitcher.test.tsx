import { render, screen } from '@testing-library/react'
import LanguageSwitcher from '..'
import mockWrapper from '~/src/__mocks__/mockWrapper'
import buildRenderTest from '~/config/jest/buildRenderTest'

const renderTest = buildRenderTest(LanguageSwitcher, {}, {})

describe('LanguageSwitcher', () => {
  it('should render english option', () => {
    const wrapper = mockWrapper().withI18n().build()

    render(<LanguageSwitcher />, { wrapper })

    expect(screen.queryByText('English')).toBeInTheDocument()
  })

  it('should render français option', () => {
    const wrapper = mockWrapper().withI18n().build()

    render(<LanguageSwitcher />, { wrapper })

    expect(screen.queryByText('Français')).toBeInTheDocument()
  })
})
