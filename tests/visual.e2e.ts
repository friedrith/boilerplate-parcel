import { test, expect } from '@playwright/test'

test.describe('Landing page', () => {
  test('should have same visual', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveScreenshot()
  })
})
