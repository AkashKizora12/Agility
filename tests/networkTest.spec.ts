import { expect, test} from '@playwright/test'
import { LoginPage} from '../page-objects/loginPage'
import { CreateNetworkPage } from '../page-objects/createNetworkPage'
import { SelectOrgansationPage} from '../page-objects/selectOrganisationPage'



//Below test will perform end to end test for create/update/delete network 
test('E2E create/update/delete network test ',{tag:'@smoke'}, async ({ page }) => {
  const lp = new LoginPage(page)
  const nt = new CreateNetworkPage(page)
  const so = new SelectOrgansationPage(page)
  await lp.navigateToLoginPage()
  await lp.login()
  await so.selectTestOrganisation()
  await nt.createNewNetowrk()
  await expect(page.getByText('Network Added Successfully!')).toBeVisible()
  await expect(page.getByText('TestNetwork')).toBeVisible()
  await nt.editNetwork()
  await expect(page.getByText(' UpdatedNetwork')).toBeVisible()
  await nt.deleteNetwork()
  await expect(page.getByText('No Data Available')).toBeVisible()

});