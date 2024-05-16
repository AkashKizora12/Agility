// import { expect} from '@playwright/test'
// import { test } from '../../test-options'


// test('Autowaiting_Concepts', async ({ page, agilityDevURL }) => {
  
//   await page.goto(agilityDevURL)
//   await page.getByText('Button Triggering AJAX Request').click()
//   const successBtn = page.locator('.bg-success')
//   await successBtn.waitFor({state: "attached"})
//   const text = await successBtn.allTextContents()    //all text contents method did not wait for element to vivisble 
//   expect(text).toContain('Data loaded with AJAX get request.')
  
// });