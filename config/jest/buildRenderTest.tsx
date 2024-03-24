import { RenderOptions, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockWrapper from '~/src/__mocks__/mockWrapper'

const buildRenderTest =
  <T extends object>(
    Component: React.FC<T>,
    props: T,
    defaultOptions: RenderOptions = {},
  ) =>
  (partialProps: Partial<T> = {}, options: RenderOptions = {}) => ({
    user: userEvent.setup(),
    ...render(<Component {...props} {...partialProps} />, {
      wrapper: mockWrapper().withI18n().build(),
      ...defaultOptions,
      ...options,
    }),
  })

export default buildRenderTest
