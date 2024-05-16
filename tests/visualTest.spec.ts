import { expect, test} from '@playwright/test'
import { LoginPage} from '../page-objects/loginPage'
import { CreateNetworkPage } from '../page-objects/createNetworkPage'
import { SelectOrgansationPage} from '../page-objects/selectOrganisationPage'


 // Below test will perform visual testing by capturing screenshot before test & After test for login page
test('Visual login page test', async ({ page }) => {
    
  const lp = new LoginPage(page)
  await lp.navigateToLoginPage()
  expect(await page.screenshot()).toMatchSnapshot('Screenshot1.png')

})

// Below test will perform visual testing by capturing screenshot before test & After test for create new network page 
test('Visual create network page test', async ({ page }) => {
    
  const lp = new LoginPage(page)
  const nt = new CreateNetworkPage(page)
  const so = new SelectOrgansationPage(page)
  await lp.navigateToLoginPage()
  await lp.login()
  await so.selectTestOrganisation()
  await nt.selectAdministrator()
  await nt.selectNetwork()
  await nt.clickAddNewNetwork()
  
})