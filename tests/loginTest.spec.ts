import { expect, test} from '@playwright/test'
import { LoginPage} from '../page-objects/loginPage'

//Below test cases are use to check login  functionality

test('Check user is should be able to navigate login page', async ({ page }) => {
  const lp = new LoginPage(page)
  await lp.navigateToLoginPage()
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible()
});


test('Check user is should be able to login with valid credential', async ({ page }) => {
  const lp = new LoginPage(page)
  await lp.navigateToLoginPage()
  await lp.login()
  await expect(page.getByText('Select Organisation')).toBeVisible()
});

//Below test case created for fail to showing the failed screenshot & videos inside my-reports 
test('Check page title', async ({ page }) => {
  const lp = new LoginPage(page)
  await lp.navigateToLoginPage()
  await expect(page).toHaveTitle('GEMAgilit')
});