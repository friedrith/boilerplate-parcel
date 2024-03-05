import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages = ['/']

test.describe('Accessibility', () => {
  pages.forEach(url => {
    test(`should not have any detectable accessibility issues for page "${url}"`, async ({
      page,
    }) => {
      await page.goto(url)
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
})
