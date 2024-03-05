import { test, expect } from '@playwright/test'

test.describe('Landing page', () => {
  test('should have a title', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Boilerplate-parcel/)
  })
})
