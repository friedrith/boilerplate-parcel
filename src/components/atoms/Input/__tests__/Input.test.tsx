import { screen } from '@testing-library/react'
import Input from '..'
import buildRenderTest from '~/config/jest/buildRenderTest'

const dataTestId = 'input'

const renderTest = buildRenderTest(Input, {
  dataTestId,
  onChange: jest.fn(),
  value: '',
})

describe('Input', () => {
  it('should render input', () => {
    renderTest()

    expect(screen.queryByTestId(dataTestId)).toBeInTheDocument()
    expect(screen.getByTestId(dataTestId).tagName).toEqual('INPUT')
  })

  it('should set value', () => {
    const value = 'foo'

    renderTest({ value })

    expect(screen.queryByDisplayValue(value)).toBeInTheDocument()
  })

  it('should trigger onChange', async () => {
    const onChange = jest.fn()
    const { user } = renderTest({ onChange })

    await user.type(screen.getByTestId(dataTestId), 'foo')

    expect(onChange).toHaveBeenCalled()
  })
})
