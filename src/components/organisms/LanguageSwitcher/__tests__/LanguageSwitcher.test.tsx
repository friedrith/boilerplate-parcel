import { screen } from '@testing-library/react'
import LanguageSwitcher from '..'
import buildRenderTest from '~/config/jest/buildRenderTest'

const renderTest = buildRenderTest(LanguageSwitcher, {}, {})

describe('LanguageSwitcher', () => {
  it('should render english option', () => {
    renderTest()

    expect(screen.queryByText('English')).toBeInTheDocument()
  })

  it('should render français option', () => {
    renderTest()

    expect(screen.queryByText('Français')).toBeInTheDocument()
  })
})
