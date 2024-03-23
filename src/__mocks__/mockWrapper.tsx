import { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from '~/config/jest/i18next'

type Wrapper = ({ children }: PropsWithChildren) => JSX.Element

class WrapperBuilder {
  wrapper: Wrapper = ({ children }: PropsWithChildren) => <>{children}</>

  addWrapper(NewWrapper: Wrapper) {
    const OldWrapper = this.wrapper
    this.wrapper = ({ children }: PropsWithChildren) => (
      <OldWrapper>
        <NewWrapper>{children}</NewWrapper>
      </OldWrapper>
    )
  }

  withI18n() {
    const OldWrapper = this.wrapper
    this.wrapper = ({ children }: PropsWithChildren) => (
      <OldWrapper>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </OldWrapper>
    )

    return this
  }

  build() {
    return this.wrapper
  }
}

const mockWrapper = () => new WrapperBuilder()

export default mockWrapper
